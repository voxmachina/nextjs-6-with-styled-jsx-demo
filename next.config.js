const path = require('path')
const webpack = require('webpack')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
require('dotenv').config({
  path: '.env'
})

module.exports = {
  webpack: (config, { dev }) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    config.module.rules.push({

      test: /\.scss$/,

      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext].js'
          }
        },
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, './.babelrc')
          }
        },
        'styled-jsx-css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev
          }
        }
      ]

    })

    if (process.env.NODE_ENV === 'trace') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
          analyzerMode: 'static'
        })
      )
    }

    return config
  }
}
