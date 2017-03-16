// API documentation - https://github.com/visionmedia/supertest
const request = require('supertest')

const app = require("../app")

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("GetBooks Resource", () => {
  describe("GET /api/books/", () => {
    it("Get request on /api/books returns HTTP 200 and catalog object", (done) => {
      chai.request(app)
        .get('/api/books/')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('catalog')
          done()
        })
    })
  })
})