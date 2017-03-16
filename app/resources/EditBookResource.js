(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, data, callback) {
    const bookExists = (bookList) => {
      const parsed = JSON.parse(bookList)
      const list = parsed.catalog.book

      if(list.length <= 0) {
        callback()
        return
      } else {
        for(let i = 0; i < list.length; i++) {
          const currentBookId = parsed.catalog.book[i].$.id
          if(currentBookId === id) {
            // Book exists, so edit it and return 200
            editBook(parsed, data, i)
            callback(data)
            return
          }
        }
        // Book does not exist so cannot be edited
        callback()
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

    const editBook = (bookList, data, index) => {
      bookList.catalog.book[index] = data
      LibraryDAO.writeXMLFile(bookList)
    }
    if(!isBook(data)) {
      callback()
      return
    }
    if(data.$.id !== id) {
      callback()
      return
    }
    LibraryDAO.readXMLFile(bookExists)
  }
}())
