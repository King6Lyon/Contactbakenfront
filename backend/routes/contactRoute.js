const express = require ('express')

const contactRouter = express.Router()
const{getAll, ajout ,update, remove}= require('../controllers/controllersContact')

 
contactRouter.get('/allcontacts',getAll)

contactRouter.post('/ajout',ajout)

contactRouter.put('/update/:id',update)

contactRouter.delete('/remove/:id',remove)




module.exports = contactRouter