const projetoFuncionarioController = require('../controllers/projetofuncionario');

module.exports = (app) => {
    app.get('/projetoFuncionario/id/:id', projetoFuncionarioController.getById);
    app.post('/projetoFuncionario', projetoFuncionarioController.postProjetoFuncionario);
    app.put('/projetoFuncionario/:id', projetoFuncionarioController.putProjetoFuncionario);
    app.patch('/projetoFuncionario/:id', projetoFuncionarioController.patchProjetoFuncionario);
    app.delete('/projetoFuncionario/:id', projetoFuncionarioController.deleteProjetoFuncionario);
}
