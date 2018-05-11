var path = require('path');
var fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var entries = {}
fs.readdirSync(path.join(__dirname, 'src')).forEach(function(folder){
    var index = path.join(__dirname, 'src', folder, 'index') + '.js'
    if( fs.existsSync(index) ){
        entries[folder] = index
    }
})

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, '..', '..', 'public', 'assets'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            imporLoaders: 1,
                            localIdentName: "[name].bundle.css",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|ttf|eot|woff|svg)$/i,
                use: [
                          {
                            loader: 'url-loader',
                            options: {
                              limit: 25000
                            }
                          }
                     ]
            }
        ],

    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].bundle.css',
          chunkFilename: '[id].bundle.css'
        })
    ],
};
