const projetoFuncionarioService = require('../services/projetofuncionario');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await projetoFuncionarioService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Relação ProjetoFuncionario não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const postProjetoFuncionario = async (req, res, next) => {
    try {
        const retorno = await projetoFuncionarioService.postProjetoFuncionario(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const putProjetoFuncionario = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await projetoFuncionarioService.putProjetoFuncionario(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Relação ProjetoFuncionario não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const patchProjetoFuncionario = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await projetoFuncionarioService.patchProjetoFuncionario(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.message === 'Relação ProjetoFuncionario não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

const deleteProjetoFuncionario = async (req, res, next) => {
    try {
        const retorno = await projetoFuncionarioService.deleteProjetoFuncionario(req.params);
        res.status(204).json(retorno);
    } catch (err) {
        if (err.message === 'Relação ProjetoFuncionario não encontrada') {
            res.status(404).send(err.message);
        } else {
            res.status(500).send(err.message);
        }
    }
};

module.exports.getById = getById;
module.exports.postProjetoFuncionario = postProjetoFuncionario;
module.exports.putProjetoFuncionario = putProjetoFuncionario;
module.exports.patchProjetoFuncionario = patchProjetoFuncionario;
module.exports.deleteProjetoFuncionario = deleteProjetoFuncionario;
