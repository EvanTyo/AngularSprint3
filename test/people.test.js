const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const db = require('../lib/db')
const app = require('../app')
const url = require('url')

describe("GET /api/people", () => {

  beforeEach(() => db.init())

  it("renders a 200 with the a list of people sorted by name", async () => {
    const person1 = db.people.insert({name: "Frida Kuvalis"})
    const person2 = db.people.insert({name: "Demarcus Mayer"})

    const response = await chai.request(app).get('/api/people')
    const port = url.parse(response.request.url).port

    expect(response).to.have.status(200)
    expect(response).to.be.json
    expect(response.body).to.deep.eq({
      _links: {
        self: {
          href: `http://127.0.0.1:${port}/api/people`
        }
      },
      _embedded: {
        people: [
          {
            _links: {
              self: {
                href: `http://127.0.0.1:${port}/api/people/${person2.id}`
              },
              meetings: {
                href: `http://127.0.0.1:${port}/api/people/${person2.id}/meetings`
              },
            },
            id: person2.id,
            name: 'Demarcus Mayer',
          },
          {
            _links: {
              self: {
                href: `http://127.0.0.1:${port}/api/people/${person1.id}`
              },
              meetings: {
                href: `http://127.0.0.1:${port}/api/people/${person1.id}/meetings`
              },
            },
            id: person1.id,
            name: 'Frida Kuvalis',
          },
        ]
      }
    })
  })

})

describe("GET /api/people/:id", () => {

  beforeEach(() => db.init())

  it("renders a 200 with the a list of people", async () => {
    const person1 = db.people.insert({name: "Frida Kuvalis"})
    const person2 = db.people.insert({name: "Demarcus Mayer"})

    const response = await chai.request(app).get(`/api/people/${person1.id}`)
    const port = url.parse(response.request.url).port

    expect(response).to.have.status(200)
    expect(response).to.be.json
    expect(response.body).to.deep.eq({
      _links: {
        self: {
          href: `http://127.0.0.1:${port}/api/people/${person1.id}`,
        },
        meetings: {
          href: `http://127.0.0.1:${port}/api/people/${person1.id}/meetings`
        },
      },
      id: person1.id,
      name: 'Frida Kuvalis',
    })
  })

})
