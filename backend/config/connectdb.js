const mongoose = require('mongoose')


const connectdb=async ()=>{
try {

 await mongoose.connect('mongodb+srv://kinglyon886:qlGZRpS3Z0xKQJMi@cluster0.qpdrcqp.mongodb.net/?retryWrites=true&w=majority')
console.log('you are connected to the db ')

}catch(err){

console.log(err)

}

}

module.exports = connectdb