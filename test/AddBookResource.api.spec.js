
//API documentation - https://github.com/visionmedia/supertest
//const request = require('supertest')

const app = require("../app")

const chai = require('chai')
  , chaiHttp = require('chai-http')

chai.use(chaiHttp)


describe("AddBook Resource",() => {
  describe("PUT /api/books/{book_id}", () => {
    const book = {
      "$": { "id": "11" },
      "author": [ "dgdgd" ],
      "title": [ "gsdg" ],
      "genre": [ "gsgs" ],
      "price": [ "143" ],
      "publish_date": [ "44-4-4-6" ],
      "description": [ "gdgdgdgdg" ]
    }
    it("Given a valid book returns HTTP 200", (done) => {
      chai.request(app)
        .put('/api/books/')
        .send(book)
        .then(function (res) {
          expect(res).to.have.status(200)
        })
        .catch(function (err) {
          throw err
        })
      chai.request(app)
        .delete('/api/books/11')
      done()
    })
    it("Given a book that already exists returns HTTP 404", (done) => {
      chai.request(app)
        .put('/api/books/')
        .send(book)

      chai.request(app)
        .put('/api/books/')
        .send(book)
        .then(function (res) {
          expect(res).to.have.status(404)
        })
        .catch(function (err) {
          throw err
        })
      chai.request(app)
        .delete('/api/books/11')
      done()
    })
    it("Given an invalid book returns HTTP 404", (done) => {
      chai.request(app)
        .put('/api/books/')
        .send({ string: "derp" })
        .then(function (res) {
          expect(res).to.have.status(404)
        })
        .catch(function (err) {
          throw err
        })
      done()
    })
  })
})
