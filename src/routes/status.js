const statusController = require('../controllers/status');

module.exports = (app) => {
    app.get('/status/id/:id', statusController.getById);
    app.get('/status/table/:table', statusController.getByTable);
    app.post('/status', statusController.postStatus);
    app.put('/status/:id', statusController.putStatus);
    app.patch('/status/:id', statusController.patchStatus);
    app.delete('/status/:id', statusController.deleteStatus);
};
