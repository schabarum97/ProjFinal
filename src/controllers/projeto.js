const projetoService = require('../services/projeto');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await projetoService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postProjeto = async (req, res, next) => {
    try {
        const retorno = await projetoService.postProjeto(req.body)
        res.status(201).json(retorno)
    } catch (err){
        console.log(req.body);
        res.status(500).send(err.message);
    }   
}
const putProjeto = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await projetoService.putProjeto(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const patchProjeto = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await projetoService.patchProjeto(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const deleteProjeto = async (req, res, next) => {
    try {
        const retorno = await projetoService.deleteProjeto(req.params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

module.exports.getById = getById;
module.exports.postProjeto = postProjeto;
module.exports.putProjeto = putProjeto;
module.exports.patchProjeto = patchProjeto;
module.exports.deleteProjeto = deleteProjeto;