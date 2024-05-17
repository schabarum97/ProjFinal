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

module.exports.getById = getById;
module.exports.postProjeto = postProjeto;