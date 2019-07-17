function friendlyError(erro) {
    // throw new Error('Errrrrooooou!!!')
    throw 'Deu ruim'
}

function scream(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        friendlyError(error)
    } finally {
        console.log('End of function')
    }
}

const myText = { nome: 'danilo', surname: 'feijó' }
scream(myText)
