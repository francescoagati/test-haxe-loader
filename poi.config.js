// poi.config.js
module.exports = {

  minimize:false,
    
  webpack(config) {

    config.devServer = {contentBase:'./*'};

    config.module.rules.push({
      test: /\.hxml$/,
      loader: 'haxe-loader',
    });

    return config;
  }
}  