
// API documentation - https://github.com/visionmedia/supertest
const request = require('supertest')

const app = require("../app")

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe("RemoveBook Resource", () => {
  describe("DELETE /api/books/{book_id}", () => {
    it("Given a valid book id returns HTTP 200", (done) => {

      chai.request(app)
        .put('/api/books/')
        .send({
          "$": { "id": "5555" },
          "author": [ "dgdgd" ],
          "title": [ "gsdg" ],
          "genre": [ "gsgs" ],
          "price": [ "143" ],
          "publish_date": [ "44-4-4-6" ],
          "description": [ "gdgdgdgdg" ]
        })
        .then(() => {
          chai.request(app)
            .delete('/api/books/5555')
            .end((err, res) => {
              res.should.have.status(200)
              done()
            })
        })
    })
    it("Given an invalid book id returns HTTP 404", (done) => {
      chai.request(app)
        .delete('/api/books/dgdgdgdg')
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
