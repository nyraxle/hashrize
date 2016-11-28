'use strict';

const program = require('commander');
const crypto = require('crypto');
const fs = require('fs');

// problema do hmac em ascii
// http://stackoverflow.com/questions/12195480/node-js-crypto-cannot-create-hmac-on-chars-with-accents
// https://nodejs.org/api/all.html#crypto_class_hmac
// http://stackoverflow.com/questions/13879617/read-file-with-ascii-encoding
program.version('1.0.0');

program
  .command('fast-hmac <file> <algorithm> <secret>')
  .alias('fh')
  .description('Calculate the HMAC digest of a file content')
  .action((file, algorithm, secret) => {
    const hmac = crypto.createHmac('sha1', secret);
    console.log(file, algorithm, secret);
    fs.createReadStream(file, 'ascii')
      .on('data', (chunk) => {
        hmac.update(chunk);
        const digest = hmac.digest('hex');
        console.log(digest);
      });
  });

module.exports = (argv) => {
    program.parse(argv);
};