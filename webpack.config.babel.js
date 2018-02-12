// Standard Packages
import { join, resolve } from 'path'

// External Packages
import CleanWebpackPlugin from 'clean-webpack-plugin'
import DotenvPlugin from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import {
  EnvironmentPlugin,
  HashedModuleIdsPlugin,
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  optimize,
} from 'webpack'
import WebpackVisualizerPlugin from 'webpack-visualizer-plugin'

// Internal Packages
import { name } from './package.json'

/**
 * @constant {string} * The environmental settings.
 */
const { NODE_ENV } = process.env

/**
 * @constant {boolean} * The conditional constants.
 */
const IS_DEVELOPMENT = NODE_ENV === 'development'
const IS_PRODUCTION = NODE_ENV === 'production'

/**
 * @constant {Object} paths The paths to configure.
 */
const paths = {
  dist: resolve(__dirname, 'dist/'),
  src: resolve(__dirname, 'src/'),
  srcPublic: resolve(__dirname, 'src/public/'),
}

/**
 * @constant {Array} plugins The plugins to spread.
 */
const plugins = [
  new HtmlWebpackPlugin({ template: join(paths.srcPublic, 'index.html') }),
  NODE_ENV && new DotenvPlugin({ path: `./.env.${NODE_ENV}` }),
  new EnvironmentPlugin(['NODE_ENV']),
].filter(Boolean)

/**
 * @constant {Object} config The config of the application.
 */
const config = {
  context: paths.src,
  entry: {
    main: ['babel-polyfill', 'react-hot-loader/patch', './index.js'],
    vendor: [
      'normalize.css',
      'prop-types',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'restql',
      'styled-components',
      'styled-theming',
    ],
  },
  module: {
    rules: [
      { include: paths.src, test: /\.(js|jsx)$/, use: 'babel-loader' },
      { exclude: paths.src, test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        include: paths.src,
        test: /\.ico$/,
        use: { loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } },
      },
    ],
  },
  output: {
    filename: `bundle/[name]${IS_PRODUCTION ? '.[chunkhash]' : ''}.js`,
    path: paths.dist,
    publicPath: `/${IS_PRODUCTION ? `${name}/` : ''}`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [paths.src, 'node_modules/'],
    symlinks: false,
  },
  ...(IS_DEVELOPMENT && {
    devServer: {
      compress: true,
      host: '0.0.0.0',
      hot: true,
      open: true,
      port: 3000,
    },
    devtool: 'eval-source-map',
    plugins: [...plugins, new NamedModulesPlugin(), new HotModuleReplacementPlugin()],
  }),
  ...(IS_PRODUCTION && {
    plugins: [
      new CleanWebpackPlugin(['dist/']),
      ...plugins,
      new HashedModuleIdsPlugin(),
      new optimize.CommonsChunkPlugin({ name: 'vendor' }),
      new optimize.CommonsChunkPlugin({ name: 'manifest' }),
      new WebpackVisualizerPlugin({ filename: '../stats.html' }),
      new UglifyJsPlugin(),
    ],
  }),
}

export default config
