const axios = require('axios')
const baseURL = 'https://como-fazer-63105.firebaseio.com/'
const auth = 'PLSgf3yOpjDP8Ap5ysxeEULj4mrT7QbNRQk6zuJ7'

// Listar dados
const list = async(key) => {
    const content = await axios.get(baseURL + key +'.json?auth=' + auth)
    if(content.data){
    const objetos = Object
                            .keys(content.data)
                            .map (key => {
                                return {
                                    id: key,
                                    ...content.data[key]}
                                })
                    return(objetos)
                            }
                   return []
    } 


  
//Deletar dados

const apagar = async(key, id) => {
    await axios.delete(baseURL + key+ '/' + id +'.json?auth=' + auth)
    return true
    }


// Obter dados

const get = async(key, id ) => {

    const content =  await axios.get(baseURL + key + '/' + id + '.json?auth=' + auth)
        return {
            id: id, 
            ...content.data
        }

    }

    // Atualizar dados
const update = async(key, id, data) => {

    await axios.put(baseURL + key + '/' + id + '.json?auth=' + auth, data)
    return true
       
}

// Criar dados 

const create = async(key, data) => {

    await axios.post(baseURL + key + '.json?auth=' + auth, data)
        return true

} 



//Exporta os módulos para serem importados utilizando o  require

module.exports = {

    list, apagar, get, update, create
}
