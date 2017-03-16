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

      // getBooks: function(callback) {
      //   const parser = new xml2js.Parser()
      //   fs.readFile('/vagrant/books.xml', function(err, data) {
      //     parser.parseString(data, function (err, result) {
      //       callback(result)
      //     })
      //   })
      // },

      getBook: function(id, callback) {
        const parser = new xml2js.Parser()
        fs.readFile('/vagrant/books.xml', function(err, data) {
          parser.parseString(data, function (err, result) {
            const len = result.catalog.book.length
            console.log()
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
