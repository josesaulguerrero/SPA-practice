const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Main[contenthash].js',
      clean: true,
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@styles': path.resolve(__dirname, 'src/assets/styles/'),
         '@images': path.resolve(__dirname, 'src/assets/images/'),
         '@components': path.resolve(__dirname, 'src/components/'),
         '@helpers': path.resolve(__dirname, 'src/helpers/'),
         '@routes': path.resolve(__dirname, 'src/routes/'),
         '@templates': path.resolve(__dirname, 'src/templates/'),
         '@src': path.resolve(__dirname, 'src/'),
      },
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /.css$/,
            use: [
               miniCSS.loader,
               'css-loader', 
            ]
         },
         {
            test: /\.(png|svg)$/,
            type: 'asset/resource',
            generator: {
               filename: './assets/[name][contenthash][ext]'
            }
         },
      ]
   },
   plugins: [
      new HTMLPlugin({
         inject: true,
         template: './public/index.html',
         filename: 'index.html',
      }),
      new miniCSS({
         filename: './assets/styles/main[contenthash].css',
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3005,
      open: true,
      compress: true,
   },
}