(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (data, callback) {
    const bookExists = (bookList) => {
      const parsed = JSON.parse(bookList)
      const list = parsed.catalog.book

      if(list.length <= 0) {
        callback()
        return
      } else {
        const bookId = data.$.id
        for(let i = 0; i < list.length; i++) {
          const currentBookId = parsed.catalog.book[i].$.id
          if(currentBookId === bookId) {
            // Book already exists so do empty callback with returns 404
            callback()
            return
          }
        }
        addBook(parsed, data)
        // Book was added so will return 200 code
        callback(data)
        return
      }
    }
    const isBook = (book) => {
      if(book.hasOwnProperty('$') &&
        book.hasOwnProperty('title') &&
        book.hasOwnProperty('author') &&
        book.hasOwnProperty('genre') &&
        book.hasOwnProperty('price') &&
        book.hasOwnProperty('publish_date') &&
        book.hasOwnProperty('description')) {
        return true
      }
      return false
    }
    const addBook = (bookList, data) => {
      const len = bookList.catalog.book.length
      bookList.catalog.book[len] = data
      LibraryDAO.writeXMLFile(bookList)
    }
    if(!isBook(data)) {
      callback()
      return
    }
    LibraryDAO.readXMLFile(bookExists)
  }
}())
