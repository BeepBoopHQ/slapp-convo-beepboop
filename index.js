'use strict'

const ConvoStore = require('./src/convoStore')

module.exports = (opts) => {
  return new ConvoStore(opts)
}
