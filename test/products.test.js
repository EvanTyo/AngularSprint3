const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const db = require('../lib/db')
const app = require('../app')
const url = require('url')

describe("/api/products", () => {
  describe("GET /api/products", () => {

    beforeEach(() => db.init())

    it("renders a 200 with the a list of products", async () => {
      const product1 = db.products.insert({ name: 'Mediocre Iron Watch', priceInCents: 399 })
      const product2 = db.products.insert({ name: 'Heavy Duty Concrete Plate', priceInCents: 499 })

      const response = await chai.request(app).get('/api/products')
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/products`
          }
        },
        _embedded: {
          products: [
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/products/${product1.id}`
                },
                items: {
                  href: `http://127.0.0.1:${port}/api/products/${product1.id}/items`
                },
              },
              id: product1.id,
              name: 'Mediocre Iron Watch',
              priceInCents: 399,
            },
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/products/${product2.id}`
                },
                items: {
                  href: `http://127.0.0.1:${port}/api/products/${product2.id}/items`
                },
              },
              id: product2.id,
              name: 'Heavy Duty Concrete Plate',
              priceInCents: 499,
            },
          ],
        }
      })
    })
  })

  describe("GET /api/products/:id", () => {
    beforeEach(() => db.init())

    it("renders a 200 with the product", async () => {
      const product = db.products.insert({ name: 'Heavy Duty Concrete Plate', priceInCents: 499 })

      const response = await chai.request(app).get(`/api/products/${product.id}`)
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/products/${product.id}`
          },
          items: {
            href: `http://127.0.0.1:${port}/api/products/${product.id}/items`
          },
        },
        id: product.id,
        name: 'Heavy Duty Concrete Plate',
        priceInCents: 499,
      })
    })
  })

})
