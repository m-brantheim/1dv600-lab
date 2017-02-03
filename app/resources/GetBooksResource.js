(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    const book = {
      id: 1,
      title: "yo",
      author: "Kimboll",
      genre: "Stooufzman",
      publishDate: "2202020",
      price: 555,
      description: "One day man went out of woods then came back"
    }

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
      callback(book);
    };

}());
