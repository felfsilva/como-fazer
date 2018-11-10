const express = require ('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')
const auth = 'PLSgf3yOpjDP8Ap5ysxeEULj4mrT7QbNRQk6zuJ7'

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)





 app.get('/', async(req, res)=> {
     await axios.get('https://como-fazer-63105.firebaseio.com/categorias.json?auth=' + auth)
     res.render('index')

 })
app.listen(port, (err) => {

    if (err) {console.log('erro na porta')
} else {
    console.log(`conectado na porta:${port}`)}

})