const funcionarioAtividadeController = require('../controllers/funcionarioatividade');

module.exports = (app) => {
    app.get('/funcionarioAtividade/id/:id', funcionarioAtividadeController.getById);
    app.post('/funcionarioAtividade', funcionarioAtividadeController.postFuncionarioAtividade);
    app.put('/funcionarioAtividade/:id', funcionarioAtividadeController.putFuncionarioAtividade);
    app.patch('/funcionarioAtividade/:id', funcionarioAtividadeController.patchFuncionarioAtividade);
    app.delete('/funcionarioAtividade/:id', funcionarioAtividadeController.deleteFuncionarioAtividade);
}
