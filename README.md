# Hashrize
`Minimalist CLI to generate HMAC digest from file content`

## Install
```sh

$ npm install -g hashrize
```

## Usage

```
Usage: hashrize [command] <parameters>

Standard Options:
    --version, -v                    Get versions of package
       --help, -h                    Get CLI help

Commands:
             fh | fast-hmac    <input> <algorithm> <secret> <encoding>    Calculate the HMAC digest of a file content and write the digest into given output file.

             Parameters:

                                input               file to parse as a digest
                            algorithm               sha1, sha256...
                               secret               key to create the digest (shhh... its a secret)
                             encoding               encoding of the output digest (hex, binnary...)

```


# Roadmap
#### TODO
```
TODO:
-  Test coverage
```
```
DONE:
-  Apply only streams
-  More 'friendly' options
-  Basic HMAC digest
```