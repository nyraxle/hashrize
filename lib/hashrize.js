'use strict';

const program = require('commander');
const hmacFileStream = require('hmac-file-stream');
program.version('1.0.0');

program
  .command('fast-hmac <inputFile> <algorithm> <secret> <encoding>')
  .alias('fh')
  .description('Get the HMAC digest from file content.')
  .action((inputFile, algorithm, secret, encoding) => {
    const hmac = hmacFileStream.createHmac(algorithm, secret);
    hmac.update(inputFile);
    hmac.digest(encoding).pipe(process.stdout);
  });

module.exports = (argv) => {
    program.parse(argv);
};