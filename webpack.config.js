const path = require('path')

const rules = [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, 'src'),
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
]

module.exports = [{
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'vue-set-props.common.dev.js',
    libraryTarget: 'commonjs2'
  }
}, {
  mode: 'production',
  entry: './src/index.js',
  module: { rules },
  output: {
    filename: 'vue-set-props.common.prod.js',
    libraryTarget: 'commonjs2'
  }
}, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'vue-set-props.dev.js',
    library: 'VueSetProps',
    libraryTarget: 'var'
  }
}, {
  mode: 'production',
  entry: './src/index.js',
  module: { rules },
  output: {
    filename: 'vue-set-props.prod.js',
    library: 'VueSetProps',
    libraryTarget: 'var'
  }
}]
