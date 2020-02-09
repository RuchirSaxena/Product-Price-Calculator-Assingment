const path = require('path');

// can be futher extended to support CSS, images, fonts paths
module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/app.js'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  jsFolder: 'js',
};
