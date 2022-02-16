const { process_params } = require("express/lib/router");
const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { url } = require("inspector");
const res = require("express/lib/response");
const { createInflate } = require("zlib");


function read(path) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } else {

        array1 = Array()
        
        var lines = data.split('\n');
        lines.forEach(function (line, i) {
            array1.push(line)

            
             
            
        });
        readhtml(array1)
        }   
    });
  }

 

 read(process.argv[2]);

async function readhtml(array1) {

    // for(let url in array1){
    //     if (url != 'http://foozlemcblargh.com') {
    //         let name = url.replace('http://','');
    //         let p1Promise = axios.get(url);
    //         let p1 = await p1Promise;
    //         html = p1.data
    //         fs.writeFile(name, html, { encoding: 'utf8', flag: 'a'}, err => {
    //         if (err) {
    //             console.log("Error!", err)
    //         }
    //         console.log(`wrote to ${name}`)
    //     } )
    // }



    //     }
        
  
  var rithm = (array1[0].replace('http://',''));
  var postgres = array1[1].replace('http://','');
  var node = array1[3].replace('http://','');

  

    
  let p1Promise = axios.get(array1[0]);
  let p2Promise = axios.get(array1[1]);
  let p3Promise = axios.get(array1[3]);

  let p1 = await p1Promise;
  rithmHtml = p1.data
  let p2 = await p2Promise;
  postgresHtml = p2.data
  let p3 = await p3Promise;
  nodeHtml = p3.data

  fs.writeFile(rithm, rithmHtml, { encoding: 'utf8', flag: 'a'}, err => {
      if (err) {
          console.log("Error!", err)
      }
      console.log(`wrote to ${rithm}`)
  } )
  fs.writeFile(postgres, postgresHtml, { encoding: 'utf8', flag: 'a'}, err => {
      if (err) {
          console.log("Error!", err)
      }
      console.log(`wrote to ${postgres}`)
  } )
  fs.writeFile('node.org', nodeHtml, { encoding: 'utf8', flag: 'a'}, err => {
      if (err) {
          console.log("Error!", err)
      }
      console.log('wrote to node.org')
  } )






//     createFile()
}

// function createFile () {





// }








