var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
            	test: /\.css$/,
            	loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            },
            {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};