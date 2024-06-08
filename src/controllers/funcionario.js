const funcionarioService = require('../services/funcionario');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await funcionarioService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Funcionário não encontrado') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const postFuncionario = async (req, res, next) => {
    try {
        const retorno = await funcionarioService.postFuncionario(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const putFuncionario = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await funcionarioService.putFuncionario(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Funcionário não encontrado') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const patchFuncionario = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await funcionarioService.patchFuncionario(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Funcionário não encontrado') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const deleteFuncionario = async (req, res, next) => {
    try {
        const retorno = await funcionarioService.deleteFuncionario(req.params);
        res.status(204).json(retorno);
    } catch (err) {
        if (err.message === 'Funcionário não encontrado') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

module.exports.getById = getById;
module.exports.postFuncionario = postFuncionario;
module.exports.putFuncionario = putFuncionario;
module.exports.patchFuncionario = patchFuncionario;
module.exports.deleteFuncionario = deleteFuncionario;