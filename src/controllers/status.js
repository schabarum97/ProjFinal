const statusService = require('../services/status');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await statusService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getByTable = async (req, res, next) => {
    try {
        const { table } = req.params;
        const retorno = await statusService.getByTable(table);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postStatus = async (req, res, next) => {
    try {
        const retorno = await statusService.postStatus(req.body)
        res.status(201).json(retorno)
    } catch (err){
        console.log(req.body);
        res.status(500).send(err.message);
    }   
}

const putStatus = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await statusService.putStatus(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const patchStatus = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await statusService.patchStatus(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const deleteStatus = async (req, res, next) => {
    try {
        const retorno = await statusService.deleteStatus(req.params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

module.exports.getByTable = getByTable;
module.exports.getById = getById;
module.exports.postStatus = postStatus;
module.exports.putStatus = putStatus;
module.exports.patchStatus = patchStatus;
module.exports.deleteStatus = deleteStatus;