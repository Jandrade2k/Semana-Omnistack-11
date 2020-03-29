const express = require('express')


const connection = require('./database/connection')

const ongController = require('./controllers/ongController')
const casoController = require('./controllers/casoController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router();

// Rota de teste
routes.get('/', (request, response) => {
    return response.send('O app está no ar.')
})

// Rotas abaixo.
routes.post('/login', sessionController.login)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.post('/casos', casoController.create)
routes.get('/casos', casoController.index)
routes.delete('/casos/:id', casoController.delete)
//Fim rotas.

module.exports = routes