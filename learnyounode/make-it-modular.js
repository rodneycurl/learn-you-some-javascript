let modularlist = require('./modular-ls');
let dirname = process.argv[2];
let ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

module.exports = function () {}
