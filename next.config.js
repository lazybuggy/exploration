const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS({enableSVG: true,
  webpack(config,options){
    return config;
  }}));