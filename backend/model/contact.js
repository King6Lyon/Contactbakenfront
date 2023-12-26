const mongoose = require('mongoose')



const ContactSchema = mongoose.Schema({

name:{
    type:String,
}, 
email:{
    type:String,
},
age:{
    type:String,
},

})

module.exports = mongoose.model('contactsahmad',ContactSchema)