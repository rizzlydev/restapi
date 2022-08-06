let __path = process.cwd(),
monk = require('monk'),
{ color } = require(__path + '/lib/color.js')

// Connection URL
let url = 'mongodb+srv://RizFurr:uwu@cluster0.zm5ah.mongodb.net/myFirstDatabase?retryWrite=true&w=majority'
let db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server','green'))
})
.catch ((e) => {
  console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar','red'))
})


module.exports = db
