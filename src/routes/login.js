const loginController = require("../controllers/login");

module.exports = (app) => {
    app.post('/login', loginController.login
    /*
        #swagger.tags = ['Login']
        #swagger.summary = 'Login de usuário'
        #swagger.description = 'Realiza o login de um usuário no sistema usando Basic Auth'
        #swagger.security = [{
            BasicAuth: []
        }]
        #swagger.responses[200] = {
            description: 'Login bem-sucedido',
            schema: {
                mensagem: 'Login bem-sucedido!',
                token: 'token_gerado'
            }
        }
        #swagger.responses[400] = {
            description: 'Credenciais não fornecidas',
            schema: {
                mensagem: 'Login com Basic Auth necessário!'
            }
        }
        #swagger.responses[401] = {
            description: 'Credenciais inválidas',
            schema: {
                mensagem: 'Credenciais inválidas!'
            }
        }
        #swagger.responses[500] = {
            description: 'Erro no servidor',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }
    */
    );
}
