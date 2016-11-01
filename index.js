#!/usr/bin/env node
const program = require('commander');
const exec = require('child_process').exec;

const tagOption = '-t, --tags <tags>';
const tagText = 'The tags to add to all JPGs';

const callChildProcess = dir => {
    const dcSubjects = program.tags.split(',')
        .map(subject => subject.trim())
        .map(subject => `-xmp-dc:subject="${subject}"`)
        .join(' ');
    exec(`exiftool -overwrite_original ${dcSubjects} ${dir}`, (err, stdout, stderr) => console.log(stdout, stderr));
};
program.arguments('<dir>').option(tagOption, tagText).action(callChildProcess).parse(process.argv);
