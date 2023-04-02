const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: __dirname, // sets the relative dot (optional)
  entry: ['./src/scss/ordiservice.scss', './src/js/ordiservice.js'],
  output: {
    path: path.resolve("static"),
    filename: "js/ordiservice.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
       {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
     { filename: "css/ordiservice.css"}
      )
  ],
};
