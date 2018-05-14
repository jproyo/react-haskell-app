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

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].bundle.css'
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
                // include: /node_modules/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|ttf|eot|woff|woff2|svg)$/i,
                use: [
                          {
                            loader: 'url-loader',
                            options: {
                              limit: 100000
                            }
                          }
                     ]
            }
        ],

    },
    plugins: [ miniCssExtract ],
};
