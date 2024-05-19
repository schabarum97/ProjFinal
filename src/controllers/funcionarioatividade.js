const funcionarioAtividadeService = require('../services/funcionarioatividade');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await funcionarioAtividadeService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postFuncionarioAtividade = async (req, res, next) => {
    try {
        const retorno = await funcionarioAtividadeService.postFuncionarioAtividade(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        console.log(req.body);
        res.status(500).send(err.message);
    }   
};

const putFuncionarioAtividade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await funcionarioAtividadeService.putFuncionarioAtividade(params);
        res.status(204).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }   
};

const patchFuncionarioAtividade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await funcionarioAtividadeService.patchFuncionarioAtividade(params);
        res.status(204).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }   
};

const deleteFuncionarioAtividade = async (req, res, next) => {
    try {
        const retorno = await funcionarioAtividadeService.deleteFuncionarioAtividade(req.params);
        res.status(204).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }   
};

module.exports.getById = getById;
module.exports.postFuncionarioAtividade = postFuncionarioAtividade;
module.exports.putFuncionarioAtividade = putFuncionarioAtividade;
module.exports.patchFuncionarioAtividade = patchFuncionarioAtividade;
module.exports.deleteFuncionarioAtividade = deleteFuncionarioAtividade;
