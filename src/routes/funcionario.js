const funcionarioController = require('../controllers/funcionario');

module.exports = (app) => {
    app.get('/funcionario/id/:id', funcionarioController.getById);
    app.post('/funcionario', funcionarioController.postFuncionario);
    app.put('/funcionario/:id', funcionarioController.putFuncionario);
    app.patch('/funcionario/:id', funcionarioController.patchFuncionario);
    app.delete('/funcionario/:id', funcionarioController.deleteFuncionario);
}