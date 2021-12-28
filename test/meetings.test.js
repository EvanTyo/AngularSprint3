const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const db = require('../lib/db')
const app = require('../app')
const url = require('url')

describe("GET /api/people/:id/meetings", () => {

  beforeEach(() => db.init())

  it("renders a 200 with the a list of all meetings that person has been involved in", async () => {
    const frida = db.people.insert({name: "Frida Kuvalis"})
    const demarcus = db.people.insert({name: "Demarcus Mayer"})
    const baron = db.people.insert({name: "Baron Fisher"})
    const bridgette = db.people.insert({name: "Bridgette Murphy"})

    const meeting1 = db.meetings.insert({ person1_id: frida.id, person2_id: demarcus.id, comment: "comment 1" })
    const meeting2 = db.meetings.insert({ person1_id: baron.id, person2_id: frida.id, comment: "comment 2" })
    const meeting3 = db.meetings.insert({ person1_id: baron.id, person2_id: bridgette.id, comment: "comment 3" })

    const response = await chai.request(app).get(`/api/people/${frida.id}/meetings`)
    const port = url.parse(response.request.url).port

    expect(response).to.have.status(200)
    expect(response).to.be.json
    expect(response.body).to.deep.eq({
      _links: {
        self: {
          href: `http://127.0.0.1:${port}/api/people/${frida.id}/meetings`
        }
      },
      _embedded: {
        meetings: [
          {
            _links: {
              self: {
                href: `http://127.0.0.1:${port}/api/people/${frida.id}/meetings/${meeting1.id}`
              }
            },
            people: [
              { ref: `http://127.0.0.1:${port}/api/people/${frida.id}`, id: frida.id },
              { ref: `http://127.0.0.1:${port}/api/people/${demarcus.id}`, id: demarcus.id },
            ],
            id: meeting1.id,
            comment: "comment 1",
          },
          {
            _links: {
              self: {
                href: `http://127.0.0.1:${port}/api/people/${frida.id}/meetings/${meeting2.id}`
              }
            },
            people: [
              { ref: `http://127.0.0.1:${port}/api/people/${baron.id}`, id: baron.id },
              { ref: `http://127.0.0.1:${port}/api/people/${frida.id}`, id: frida.id },
            ],
            id: meeting2.id,
            comment: "comment 2",
          },
        ]
      }
    })
  })

})

describe("POST /api/people/:id/meetings", () => {

  beforeEach(() => db.init())

  it("creates and returns the meeting", async () => {
    const frida = db.people.insert({name: "Frida Kuvalis"})
    const demarcus = db.people.insert({name: "Demarcus Mayer"})

    const response = await chai.request(app)
      .post(`/api/people/${frida.id}/meetings`)
      .send({
        otherPersonId: demarcus.id.toString(),
        comment: "Some comment"
      })
    const port = url.parse(response.request.url).port

    expect(response).to.have.status(200)
    expect(response).to.be.json
    expect(response.body).to.deep.eq({
      _links: {
        self: {
          href: `http://127.0.0.1:${port}/api/people/${frida.id}/meetings/1`
        }
      },
      people: [
        { ref: `http://127.0.0.1:${port}/api/people/${frida.id}`, id: frida.id },
        { ref: `http://127.0.0.1:${port}/api/people/${demarcus.id}`, id: demarcus.id },
      ],
      id: 1,
      comment: "Some comment",
    })
  })

})
