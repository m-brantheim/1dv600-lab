(function () {
    "use strict"

    const LibraryDAO = require('../dao/LibraryDAO')

    module.exports = function (id, callback) {
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
              // Book exists, so delete it and return 200
              removeBook(parsed, i)
              return
            }
          }
          // Book does not exist so cannot be deleted
          callback()
          return
        }
      }

      const removeBook = (bookList, index) => {
        bookList.catalog.book.splice(index,1)
        LibraryDAO.writeXMLFile(bookList)
        callback('success')
        return
      }
      LibraryDAO.readXMLFile(bookExists)
    }
}())
