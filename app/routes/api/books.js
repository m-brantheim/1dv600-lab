(function () {
  "use strict"

  const express = require('express')
  const router = express.Router()

  const AddBookResource = require('../../resources/AddBookResource')
  const EditBookResource = require('../../resources/EditBookResource')
  const GetBookResource = require('../../resources/GetBookResource')
  const GetBooksResource = require('../../resources/GetBooksResource')
  const RemoveBookResource = require('../../resources/RemoveBookResource')



  router.get('/', function (req, res) {
    res.type('json')

    GetBooksResource(function (data) {
      res.send(data)
    })
  })

  router.put('/', function (req, res) {
    res.type('json')

    AddBookResource(req.body, function (data) {
      if(typeof(data) == "undefined") {
        res.sendStatus(404)
      } else {
        res.sendStatus(200)
      }
    })
  })


  router.route('/:bookId')
    .get(function (req, res) {
      res.type('json')
      GetBookResource(req.params.bookId, function (data) {
        if(typeof(data) == "undefined") {
          res.sendStatus(404)
        } else {
          res.send(data)
        }
      })
    })

    .post(function (req, res) {
      res.type('json')
      EditBookResource(req.params.bookId, req.body, function (data) {
        if(typeof(data) == "undefined") {
          res.sendStatus(404)
        } else {
          res.sendStatus(200)
        }
      })
    })

    .delete(function (req, res) {
      res.type('json')
      RemoveBookResource(req.params.bookId, function (data) {
        if(typeof(data) == "undefined") {
          res.sendStatus(404)
        } else {
          res.sendStatus(200)
        }
      })
    })

  module.exports = router
}())
