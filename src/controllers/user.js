const userService = require('../services/user');

const newUser = async (req, res, next) => {
    try {
        const retorno = await userService.newUser(req.body)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}

const getUser = async (req, res, next) => {
    try {
        const retorno = await userService.getUser()
        res.status(200).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const retorno = await userService.deleteUser(req.params)
        res.status(204).json(retorno)
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Usuário não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }
}


const patchPassword = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        let ret = await userService.patchPassword(params)
        res.status(201).send(ret)
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Tarefa não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }
}

module.exports.newUser = newUser
module.exports.getUser = getUser
module.exports.deleteUser = deleteUser
module.exports.patchPassword = patchPassword