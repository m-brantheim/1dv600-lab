(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.getBook(id, callback)
  }
}())
