(function () {
  "use strict"

  const fs = require('fs')

  // Instructions how to use the xml2js
  // https://github.com/Leonidas-from-XIV/node-xml2js
  const xml2js = require('xml2js')

  // Use this file to write and read the xml file.
  const LibraryDAO = {

    // Get the entire file from the file system.
    readXMLFile: function(callback) {
      const parser = new xml2js.Parser()
      fs.readFile('/vagrant/books.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
          callback(JSON.stringify(result))
        })
      })
    },

    // Write the entire file from the file system.
    writeXMLFile: function(data) {
      const builder = new xml2js.Builder()
      const xml = builder.buildObject(data)
      fs.writeFile('/vagrant/books.xml', xml, function(err) { if(err){ return console.error(err) }})
    },

    getBook: function(id, callback) {
      const parser = new xml2js.Parser()
      fs.readFile('/vagrant/books.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
          const len = result.catalog.book.length

          // If id cannot be converted to number then treat it as a string (do search on title)
          if(isNaN(Number(id))) {
            for(let i = 0; i < len; i++) {
              const bookTitle = result.catalog.book[i].title[0].toLowerCase()

              // If indexOf substring is not -1 then id is a part of the title
              if(bookTitle.indexOf(id.toLowerCase()) !== -1) {
                // Return the first matched book
                callback(result.catalog.book[i])
                return
              }
            }
            // No book matched the title so give up search
            callback()
            return
          }
          if(id - 1 < 0 || id - 1 > len) {
            console.log("outside bounds")
            callback()
          } else {
            callback(result.catalog.book[id-1])
          }
        })
      })
    },
  }

  module.exports = LibraryDAO
}())
