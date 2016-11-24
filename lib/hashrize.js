'use strict';

const program = require('commander');
const crypto = require('crypto');
const fs = require('fs');

// problema do hmac em ascii
// http://stackoverflow.com/questions/12195480/node-js-crypto-cannot-create-hmac-on-chars-with-accents
// https://nodejs.org/api/all.html#crypto_class_hmac
program.version('1.0.0');

program
  .command('fast-hmac <file> <algorithm> <secret>')
  .alias('fh')
  .description('Calculate the HMAC digest of a file content')
  .action((file, algorithm, secret) => {

    fs.createReadStream(file)
      .on('data', (chunk) => {
        const hmac = crypto.createHmac('sha1', secret)
          .update('Arquivo bla')
          .digest('hex');
        console.log(hmac);
      });
  });

module.exports = (argv) => {
    program.parse(argv);
};