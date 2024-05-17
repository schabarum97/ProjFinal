const projetoController = require('../controllers/projeto')

module.exports = (app) => {
    app.get('/projeto/id/:id', projetoController.getById);
    app.post('/projeto', projetoController.postProjeto);
}