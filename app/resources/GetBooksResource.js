(function () {
  "use strict"

  const LibraryDAO = require('../dao/LibraryDAO')
  const Book = require('../dao/Book')

  const book1 = Book("1", "yo", "Kimboll", "Stooufzman", "2202020", "555",
    "One day man went out of woods then came back")
  const book2 = Book("2", "goodbook", "Rangubob", "Stuff people read", "In the future", "99",
    "In future computers rule and humans live with goats")
  const book3 = Book("3", "seriousluy", "Fnoor Gerflukz", "Random-algorithmic-biological processes",
    "999-99", "40", "Non-deterministic parametric mapping of stochastic biological process")
  const book4 = Book("4", "Why Materialism Is Baloney: How True Skeptics Know There Is No Death and Fathom Answers to life, the Universe, and Everything",
  "Bernardo Kastrup", "Philosophy", "April 25, 2014", "17.81",
    "The present framing of the cultural debate in terms of materialism versus religion has allowed materialism to go " +
    "unchallenged as the only rationally-viable metaphysics. This book seeks to change this. It uncovers the absurd " +
    "implications of materialism and then, uniquely, presents a hard-nosed non-materialist metaphysics substantiated " +
    "by skepticism, hard empirical evidence, and clear logical argumentation. It lays out a coherent framework upon " +
    "which one can interpret and make sense of every natural phenomenon and physical law, as well as the modalities " +
    "of human consciousness, without materialist assumptions. According to this framework, the brain is merely the " +
    "image of a self-localization process of mind, analogously to how a whirlpool is the image of a self-localization " +
    "process of water. The brain doesn’t generate mind in the same way that a whirlpool doesn’t generate water. " +
    "It is the brain that is in mind, not mind in the brain. Physical death is merely a de-clenching of awareness. " +
    "The book closes with a series of educated speculations regarding the afterlife, psychic phenomena, " +
    "and other related subjects.")
  const book5 = Book("5", "My Big TOE - The Complete Trilogy", "Thomas Campbell", "Physics/Philosophy", "December 9, 2007",
  "12.35", "The complete My Big TOE trilogy has now been combined into one paperback volume at a substantial" +
    "savings over buying the three volumes separately.")
  const book6 = Book("6", "Thus Spake Zarathustra A book for all and none", "Friedrich Wilhelm Nietzsche", "Philosophy",
  "May 12, 2012", "6.22", "First published between 1883 and 1891, this philosophical novel is written in a distinct and " +
    "original style which combines dialogue with verse. It established Nietzsche as a bold and original thinker;" +
    "a reputation that would only be enhanced by later works such as Beyond Good and Evil." +
    "Thus Spoke Zarathustra has several recurring themes, placing the main character - " +
    "the creator of one of the first monotheistic faiths - in a story which deals with ideas such as the " +
    "eternal recurrence of the same, the parable on the death of God, and the prophecy of the Übermensch. " +
    "This combination proved potent in philosophic circles, with the text passionately discussed in " +
    "academic circles to this day. As well as its digestible translation, the book also contains an introduction " +
    "by the sister of Friedrich Nietzsche, Elizabeth Forster-Nietzsche, explaining her sibling's convictions and" +
    "motivations behind authoring this philosophic book.")

  const bookList = [book1, book2, book3, book4, book5, book6]

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    callback(JSON.stringify({answer: bookList}))
  }
}())
