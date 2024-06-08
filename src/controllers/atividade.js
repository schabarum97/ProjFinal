const atividadeService = require('../services/atividade');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await atividadeService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Atividade não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const postAtividade = async (req, res, next) => {
    try {
        const retorno = await atividadeService.postAtividade(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const putAtividade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await atividadeService.putAtividade(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Atividade não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const patchAtividade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await atividadeService.patchAtividade(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Atividade não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const deleteAtividade = async (req, res, next) => {
    try {
        const retorno = await atividadeService.deleteAtividade(req.params);
        res.status(204).json(retorno);
    } catch (err) {
        if (err.message === 'Atividade não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

module.exports.getById = getById;
module.exports.postAtividade = postAtividade;
module.exports.putAtividade = putAtividade;
module.exports.patchAtividade = patchAtividade;
module.exports.deleteAtividade = deleteAtividade;
