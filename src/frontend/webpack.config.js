module.exports = {
  entry: {
      app: './app/app.module.ts',
      // b: "./src/b/b.module.ts"
  },
  output: {
      filename: './dist/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      extensions: [".ts", ".js"]
  },
  module: {
      loaders: [
          {
              test: /\.ts$/,
              loaders: [
                  'awesome-typescript-loader',
                  'source-map-loader'
              ]
          }]
  },
  externals: {
      angular: "angular",
      COMBINATION_VIEWER_TEMPLATE_PATH: "COMBINATION_VIEWER_TEMPLATE_PATH"
  }
};