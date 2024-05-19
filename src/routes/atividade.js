const atividadeController = require('../controllers/atividade');

module.exports = (app) => {
    app.get('/atividade/id/:id', atividadeController.getById);
    app.post('/atividade', atividadeController.postAtividade);
    app.put('/atividade/:id', atividadeController.putAtividade);
    app.patch('/atividade/:id', atividadeController.patchAtividade);
    app.delete('/atividade/:id', atividadeController.deleteAtividade);
}
