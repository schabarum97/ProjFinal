const tarefaService = require('../services/tarefa');

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await tarefaService.getById(id);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Tarefa não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }
};

const postTarefa = async (req, res, next) => {
    try {
        const retorno = await tarefaService.postTarefa(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }   
};

const putTarefa = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await tarefaService.putTarefa(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Tarefa não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }   
};

const patchTarefa = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await tarefaService.patchTarefa(params);
        res.status(200).json(retorno);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Tarefa não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }   
};

const deleteTarefa = async (req, res, next) => {
    try {
        const retorno = await tarefaService.deleteTarefa(req.params);
        res.status(204).json(retorno);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send('Tarefa não encontrada');
        } else {
            res.status(500).send(err.message);
        }
    }   
};

module.exports.getById = getById;
module.exports.postTarefa = postTarefa;
module.exports.putTarefa = putTarefa;
module.exports.patchTarefa = patchTarefa;
module.exports.deleteTarefa = deleteTarefa;
