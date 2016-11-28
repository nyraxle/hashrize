'use strict';

const program = require('commander');
const crypto = require('crypto');
const fs = require('fs');
program.version('1.0.0');

program
  .command('fast-hmac <inputFile> <output-file> <algorithm> <secret> <digest-encoding>')
  .alias('fh')
  .description('Calculate the HMAC digest of a file content and write the digest into given output file.')
  .action((inputFile, outPutFile, algorithm, secret, encoding) => {
    const hmac = crypto.createHmac(algorithm, secret);
    hmac.setEncoding(encoding);
    const readStream = fs.createReadStream(inputFile);
    readStream.on('end', (chunk) => {
      hmac.end();
    });
    const writeStream = fs.createWriteStream(outPutFile);
    readStream
      .pipe(hmac)
      .pipe(writeStream);
    writeStream.on('finish', () => console.log('Digest written on: ', outPutFile));
  });

module.exports = (argv) => {
    program.parse(argv);
};