addDCSubjects
=

A simple shell script which uses [exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/) to add a list of 
[XMP dc subjects](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/XMP.html) to all compatible files in a
directory.

## Requirements

You need to have [exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/) installed on your system.

## Install

#### NPM
```bash
$ npm install -g adddcsubjects
```

## Usage

```bash
$ addDcSubjects -t feeding,five,thousand ../crass
```

## License

  [MIT](LICENSE)
