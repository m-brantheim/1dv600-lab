"use strict"

const Book = (id, title, author, genre, publishDate, price, description) => {

  const book = {}

  let _id = id || -1
  let _title = title || "Unknown"
  let _author = author || "Unknown"
  let _genre = genre || "Unknown"
  let _publishDate = publishDate || "Unknown"
  let _price = price || -1
  let _description = description || "No description"

  book.getId = () => {
    return _id
  }

  book.setId = (id) => {
    if(isNumber(id)) {
      _id = id
    } else {
      console.log("Id must be a number")
    }
  }

  book.getTitle = () => {
    return _title
  }

  book.setTitle = (title) => {
    if(isString(title)) {
      _title = title
    } else {
      console.log("Title must be a string")
    }
  }

  book.getAuthor = () => {
    return _author
  }

  book.setAuthor = (author) => {
    if(isString(author)) {
      _author = author
    } else {
      console.log("Author must be a string")
    }
  }

  book.getGenre = () => {
    return _genre
  }

  book.setGenre = (genre) => {
    if(isString(genre)) {
      _genre = genre
    } else {
      console.log("Genre must be a string")
    }
  }

  book.getPublishDate = () => {
    return _publishDate
  }

  book.setPublishDate = (publishDate) => {
    if(isString(publishDate)) {
      _publishDate = publishDate
    } else {
      console.log("Publish date must be a string")
    }
  }

  book.getPrice = () => {
    return _price
  }

  book.setPrice = (price) => {
    if(isNumber(price)) {
      _price = price
    } else {
      console.log("Price must be a number")
    }
  }

  book.getDescription = () => {
    return _description
  }

  book.setDescription = (description) => {
    if(isString(description)) {
      _description = description
    } else {
      console.log("Description must be a string")
    }
  }

  // From https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
  const isNumber = (value) => {
    if ((undefined === value) || (null === value)) {
      return false
    }
    if (typeof value == 'number') {
      return true
    }
    return !isNaN(value - 0)
  }

  const isString = (str) => {
    return typeof str === "string"
  }

  return book
}

// Test book factory function
const book = Book()
// Test getters
console.log(book.getId())
console.log(book.getTitle())
console.log(book.getAuthor())
console.log(book.getGenre())
console.log(book.getPublishDate())
console.log(book.getPrice())
console.log(book.getDescription())
// Test setters
book.setId(1)
console.log(book.getId())
book.setTitle("JavaScript is great")
console.log(book.getTitle())
book.setAuthor("Sumbodee")
console.log(book.getAuthor())
book.setGenre("Programourz")
console.log(book.getGenre())
book.setPublishDate("03/02/2017")
console.log(book.getPublishDate())
book.setPrice(12)
console.log(book.getPrice())
book.setDescription("Programours making programz")
console.log(book.getDescription())

// Test validation
book.setId("g")
book.setPrice("yaouw")
book.setTitle(3444)
book.setAuthor(304059)
book.setGenre()
book.setPublishDate()
book.setDescription()

module.exports = Book