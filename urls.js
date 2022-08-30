const { process_params } = require("express/lib/router");
const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { url } = require("inspector");
const res = require("express/lib/response");
const { createInflate } = require("zlib");
const { off } = require("process");

path = filename = process.argv[2];

function read(path) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } else {
        
        var lines = data.split('\n');
        lines.forEach(function (line, i) {
            readhtml(line)
            
        });
   
        }   
    });
  }

 read(process.argv[2]);

async function readhtml(line) {

try {
    let siteName = ''
    let promise = axios.get(line)
    let result = await promise
 
    if(line.includes('https://')){
       siteName = line.replace('https://','');
       siteName = siteName.split('/')[0];
       data = result.data

writeFile(siteName, data)
    }
else {
    siteName = line.replace('http://','');
    data = result.data
    writeFile(siteName, data)
}

}
catch (err) {
    if(line) {
        console.log(`couldnt download ${line} `)
    }
}

}

function writeFile(fileName, data) {

    fs.writeFile(fileName, data, { encoding: 'utf8', flag: 'a'}, err => {
        console.log(`wrote to ${fileName}`)
} )

}








