const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const linker = require('../lib/linker')

describe("linker", () => {

    it("adds the delay parameter when it's present", () => {
      const req = {
        path: '/api',
        protocol: 'http',
        get() {
          return 'localhost:8082'
        },
        pathname: '/foobar',
        query: { delay: 500 }
      }

      expect(linker(req)).to.eq('http://localhost:8082/api?delay=500')
    })

    it("ignores other query parameters", () => {
      const req = {
        path: '/api',
        protocol: 'http',
        get() {
          return 'localhost:8082'
        },
        pathname: '/foobar',
        query: { other: 500 }
      }

      expect(linker(req)).to.eq('http://localhost:8082/api')
    })

    it("does not add the delay parameter when it's not present", () => {
      const req = {
        path: '/api',
        protocol: 'http',
        get() {
          return 'localhost:8082'
        },
        pathname: '/foobar',
      }

      expect(linker(req)).to.eq('http://localhost:8082/api')
    })

    it("skips the port if a port didn't come in", () => {
      const req = {
        path: '/api',
        protocol: 'http',
        get() {
          return 'example.com'
        },
        pathname: '/foobar',
      }

      expect(linker(req)).to.eq('http://example.com/api')
    })

    it("respects the x-forwarded-for header", () => {
      const req = {
        headers: {
          'x-forwarded-for': 'https://api.example.com',
        },
        path: '/api',
        protocol: 'http',
        get() {
          return 'example.com'
        },
        pathname: '/foobar',
      }

      expect(linker(req)).to.eq('https://api.example.com/api')
    })

    it("defaults to the x-forwarded-proto header if x-forwarded-for is an IP address", () => {
      const req = {
        headers: {
          'x-forwarded-for': '71.196.136.34',
          'x-forwarded-proto': 'https'
        },
        path: '/api',
        get() {
          return 'example.com'
        },
        pathname: '/foobar',
      }

      expect(linker(req)).to.eq('https://example.com/api')
    })

})
