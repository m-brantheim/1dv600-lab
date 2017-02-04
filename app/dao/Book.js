"use strict"

const Book = (id, title, author, genre, publishDate, price, description) => {

  const book = {}

  book.id = id || -1
  book.title = title || "Unknown"
  book.author = author || "Unknown"
  book.genre = genre || "Unknown"
  book.publishDate = publishDate || "Unknown"
  book.price = price || -1
  book.description = description || "No description"

  return book
}

// Test book factory function
//const book = Book(1, "Title", "Author", "Genre", "1999-10-12", 12, "Good book to read")
//console.log(book)

module.exports = Book