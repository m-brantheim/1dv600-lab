(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    LibraryDAO.readXMLFile(callback)
  }
}())
