
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest')

var app = require("../app")

describe("GetBook Resource", () => {
    describe("GET /api/books/{book_id}", () => {
        it("Given valid book id returns the correct book object", (done) => {
            request(app)
                .get('/api/books/1')
                .set('Accept', 'application/json')
                .expect(200, {
                  $: {
                    id: "1"
                  },
                  author: [
                    "Isaac Asimov"
                  ],
                  title: [
                    "Foundation"
                  ],
                  genre: [
                    "Science Ficition"
                  ],
                  price: [
                    "164"
                  ],
                  publish_date: [
                    "1951-08-21"
                  ],
                  description: [
                    "Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."
                  ]
                },done)

        })
      it("Given invalid book id returns 404", (done) => {
        request(app)
          .get('/api/books/gdgdgd')
          .set('Accept', 'application/json')
          .expect(404,done)
      })
    })
  describe("GET /api/books/{title}", () => {
    it("Given valid book title returns the correct book object", (done) => {
      request(app)
        .get('/api/books/Foundation')
        .set('Accept', 'application/json')
        .expect(200, {
          $: {
            id: "1"
          },
          author: [
            "Isaac Asimov"
          ],
          title: [
            "Foundation"
          ],
          genre: [
            "Science Ficition"
          ],
          price: [
            "164"
          ],
          publish_date: [
            "1951-08-21"
          ],
          description: [
            "Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."
          ]
        },done)

    })
    it("Given invalid book title returns 404", (done) => {
      request(app)
        .get('/api/books/shabdabrahman')
        .set('Accept', 'application/json')
        .expect(404,done)
    })
  })
})
