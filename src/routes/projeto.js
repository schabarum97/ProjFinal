const projetoController = require('../controllers/projeto')

module.exports = (app) => {
    app.get('/projeto/id/:id', projetoController.getById);
    app.post('/projeto', projetoController.postProjeto);
    app.put('/projeto/:id', projetoController.putProjeto);
    app.patch('/projeto/:id', projetoController.patchProjeto);
    app.delete('/projeto/:id', projetoController.deleteProjeto);
}