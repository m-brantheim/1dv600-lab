const app = require("../app")

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("EditBook Resource", () => {
  describe("POST /api/books/{book_id}", () => {
    it("Given a valid book id and a valid book that matches id returns HTTP 200", (done) => {
      chai.request(app)
        .post('/api/books/12')
        .send({
          "$": { "id": "12" },
          "author": [ "dgdgd" ],
          "title": [ "gsdg" ],
          "genre": [ "gsgs" ],
          "price": [ "143" ],
          "publish_date": [ "44-4-4-6" ],
          "description": [ "gdgdgdgdg" ]
        })
        .then(function (res) {
          expect(res).to.have.status(200)
        })
        .catch(function (err) {
          throw err
        })
      done()
    })
    it("Given an invalid book id returns HTTP 404", (done) => {
      chai.request(app)
        .post('/api/books/sfsfs')
        .then(function (res) {
          expect(res).to.have.status(404)
        })
        .catch(function (err) {
          throw err
        })
      done()
    })
    it("Given valid book id and valid book with mismatching id returns HTTP 404", (done) => {
      chai.request(app)
        .post('/api/books/1')
        .send({
          "$": { "id": "12" },
          "author": [ "dgdgd" ],
          "title": [ "gsdg" ],
          "genre": [ "gsgs" ],
          "price": [ "143" ],
          "publish_date": [ "44-4-4-6" ],
          "description": [ "gdgdgdgdg" ]
        })
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
