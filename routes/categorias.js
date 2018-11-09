const express = require('express')
const router = express.Router()
const controllers = require('../controllers/categorias')


// Exibe na tela o HTML da pasta /categorias/nova/ejs -> Botão e campo para preencher nova categoria
router.get('/nova', controllers.novaForm)

// Inseri no banco de dados, os valores informados no campo. Pegando o method POST passado pelo form do nova.ejb
// Pega os valores informados e posta como JSON
router.post('/nova', controllers.novoPost)

// Lista os dados salvos no banco de dados / 
router.get('', controllers.list)

// Ecluir os valores do banco de dados 
router.get('/excluir/:id',  controllers.apagar)

   // Editar os valores do banco de dados
router.get('/editar/:id', controllers.editarForm)

  // Atualizar dados
router.post('/editar/:id', controllers.editarPost)

// Exportar o router para Global
module.exports =  router
