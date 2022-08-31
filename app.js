const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require('./expressError')

app.use(express.json())

app.post('/', async function(req, res, next) {

 let out = []
try {
  for(dev of req.body.developers) {
    let  response = await axios.get(`https://api.github.com/users/${dev}`)
    let result = await response
    out.push(result.data)


  }
  return res.send(out.map(r => ({ name: r.name, bio: r.bio })));
}
catch (err){
  return next(new ExpressError('unididentified username', 404))

}
   
   
});



app.listen(3000, function(){
  console.log('App on port 3000');
}) 
