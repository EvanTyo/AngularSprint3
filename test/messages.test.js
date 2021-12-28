const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const db = require('../lib/db')
const app = require('../app')
const url = require('url')

describe("/api/messages", () => {
  describe("GET /api/messages", () => {

    beforeEach(() => db.init())

    it("renders a 200 with the a list of messages", async () => {
      const message1 = db.messages.insert({
        subject: 'Hi',
        starred: true,
        read: true,
        labels: ['dev', 'personal'],
      })
      const message2 = db.messages.insert({
        subject: 'Hi again',
        starred: false,
        read: false,
        labels: [],
      })

      const response = await chai.request(app).get('/api/messages')
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/messages`
          }
        },
        _embedded: {
          messages: [
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/messages/${message1.id}`
                },
              },
              id: message1.id,
              subject: 'Hi',
              starred: true,
              read: true,
              labels: ['dev', 'personal'],
            },
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/messages/${message2.id}`
                },
              },
              id: message2.id,
              subject: 'Hi again',
              starred: false,
              read: false,
              labels: [],
            },
          ],
        }
      })
    })
  })

  describe("GET /api/messages/:id", () => {

    beforeEach(() => db.init())

    it("renders a 200 with the a list of messages", async () => {
      const message = db.messages.insert({
        subject: 'Hi',
        body: 'Hello there',
        starred: true,
        read: true,
        labels: ['dev', 'personal'],
      })

      const response = await chai.request(app).get(`/api/messages/${message.id}`)
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/messages/${message.id}`
          },
        },
        id: message.id,
        subject: 'Hi',
        starred: true,
        read: true,
        labels: ['dev', 'personal'],
        body: 'Hello there',
      })
    })

  })

  describe("POST /api/messages", () => {

    beforeEach(() => db.init())

    it("creates a message", async () => {
      const response = await chai.request(app)
        .post(`/api/messages`)
        .send({
          subject: 'I created this',
          body: 'And it is sent',
        })
      const port = url.parse(response.request.url).port
      const message = db.messages.findAll()[0]

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/messages/${message.id}`
          },
        },
        id: message.id,
        subject: 'I created this',
        starred: false,
        read: false,
        labels: [],
        body: 'And it is sent',
      })
    })

  })

  describe("POST /api/messages", () => {

    beforeEach(() => db.init())

    it("creates a message", async () => {
      const response = await chai.request(app)
        .post(`/api/messages`)
        .send({
          subject: 'I created this',
          body: 'And it is sent',
        })
      const port = url.parse(response.request.url).port
      const message = db.messages.findAll()[0]

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/messages/${message.id}`
          },
        },
        id: message.id,
        subject: 'I created this',
        starred: false,
        read: false,
        labels: [],
        body: 'And it is sent',
      })
    })
  })

  describe("PATCH /api/messages", () => {

    beforeEach(() => db.init())

    it("stars messages", async () => {
      const message1 = db.messages.insert({ starred: false, read: false, labels: [] })
      const message2 = db.messages.insert({ starred: false, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: false, read: false, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'star',
          star: true,
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.starred).to.be.true
      expect(message2.starred).to.be.false
      expect(message3.starred).to.be.true
    })

    it("unstars messages", async () => {
      const message1 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message2 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: false, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'star',
          star: false,
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.starred).to.be.false
      expect(message2.starred).to.be.true
      expect(message3.starred).to.be.false
    })

    it("marks messages as read", async () => {
      const message1 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message2 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: false, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'read',
          read: true,
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.read).to.be.true
      expect(message2.read).to.be.false
      expect(message3.read).to.be.true
    })

    it("marks messages as unread", async () => {
      const message1 = db.messages.insert({ starred: true, read: true, labels: [] })
      const message2 = db.messages.insert({ starred: true, read: true, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: true, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'read',
          read: false,
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.read).to.be.false
      expect(message2.read).to.be.true
      expect(message3.read).to.be.false
    })

    it("deletes messages", async () => {
      const message1 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message2 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: false, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'delete',
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(db.messages.findAll()).to.deep.eq([message2])
    })

    it("adds labels to messages", async () => {
      const message1 = db.messages.insert({ starred: true, read: false, labels: ['dev'] })
      const message2 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: false, labels: [] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'addLabel',
          label: 'dev',
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.labels).to.deep.eq(['dev'])
      expect(message2.labels).to.deep.eq([])
      expect(message3.labels).to.deep.eq(['dev'])
    })

    it("removes labels from messages", async () => {
      const message1 = db.messages.insert({ starred: true, read: false, labels: ['dev'] })
      const message2 = db.messages.insert({ starred: true, read: false, labels: [] })
      const message3 = db.messages.insert({ starred: true, read: false, labels: ['other', 'dev'] })

      const response = await chai.request(app)
        .patch(`/api/messages`)
        .send({
          messageIds: [message1.id, message3.id],
          command: 'removeLabel',
          label: 'dev',
        })
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)

      expect(message1.labels).to.deep.eq([])
      expect(message2.labels).to.deep.eq([])
      expect(message3.labels).to.deep.eq(['other'])
    })
  })

})
