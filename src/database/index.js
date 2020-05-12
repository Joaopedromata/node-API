const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest').then(() =>{
    console.log('Conectado ao MongodB')
}).catch((err) => {
    console.log('erro ao se conectar com o Mongo' +err)
})
mongoose.Primise = global.Promise

module.exports = mongoose