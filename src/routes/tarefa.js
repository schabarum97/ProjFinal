const tarefaController = require('../controllers/tarefa');

module.exports = (app) => {
    app.get('/tarefa/id/:id', tarefaController.getById);
    app.post('/tarefa', tarefaController.postTarefa);
    app.put('/tarefa/:id', tarefaController.putTarefa);
    app.patch('/tarefa/:id', tarefaController.patchTarefa);
    app.delete('/tarefa/:id', tarefaController.deleteTarefa);
}
