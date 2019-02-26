function friendlyError(erro) {
    throw new Error('Errrrrooooou!!!')
}

function scream(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (messageError) {
        friendlyError(messageError);
    } finally {
        console.log('It is done');
    }
}

const obj = { name: 'Danilo' };
scream(obj);
