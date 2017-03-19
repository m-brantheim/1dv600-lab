(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (callback) {
    LibraryDAO.readXMLFile(callback)
  }
}())
