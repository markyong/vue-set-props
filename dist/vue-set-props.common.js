if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vue-set-props.common.prod.js')
} else {
  module.exports = require('./vue-set-props.common.dev.js')
}
