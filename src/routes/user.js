const usuariosController = require('../controllers/user');
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.post('/user',checkPermission.check, usuariosController.newUser
        /* 
            #swagger.tags = ["User"]
            #swagger.summary = "Cria um novo usuário"
            #swagger.description = 'Cria um novo usuário no sistema'
            #swagger.parameters['user'] = {
                in: 'body',
                description: 'Dados para criar um novo usuário',
                required: true,
                schema: {
                    "user": "usuario_exemplo",
                    "pass": "senha123"
                }
            }
            #swagger.responses[201] = {
                description: 'Usuário criado',
                schema: {
                    mensagem: 'Usuário criado com sucesso!',
                    id: 1
                }
            }  
            #swagger.responses[500] = {
                description: 'Erro ao tentar criar o usuário',
                schema: {
                    mensagem: 'Erro no servidor!'
                }
            }    
        */
    );

    app.get('/user',checkPermission.check, usuariosController.getUser
        /*
            #swagger.tags = ["User"]
            #swagger.summary = "Consulta todos os usuários"
            #swagger.description = 'Consulta a lista de todos os usuários no sistema'
            #swagger.responses[200] = {
                description: 'Sucesso!',
                schema: {
                    "total": 2,
                    "usuarios": [
                        {
                            "log_id": 1,
                            "log_nome": "usuario1"
                        },
                        {
                            "log_id": 2,
                            "log_nome": "usuario2"
                        }
                    ]
                }
            }
            #swagger.responses[500] = {
                description: 'Erro ao tentar buscar os usuários',
                schema: {
                    mensagem: 'Erro no servidor!'
                }
            }
        */
    );

    app.delete('/user/:id',checkPermission.check, usuariosController.deleteUser
        /*
            #swagger.tags = ["User"]
            #swagger.summary = "Deleta usuário por ID"
            #swagger.description = 'Deleta um usuário específico pelo ID'
            #swagger.parameters['id'] = {
                description: 'ID do usuário',
                in: 'path',
                name: 'id',
                required: true,
                type: 'integer',
                example: 1    
            }
            #swagger.responses[204] = {
                description: 'Usuário deletado',
                schema: {
                    mensagem: 'Usuário deletado com sucesso!'
                }
            }  
            #swagger.responses[404] = {
                description: 'Usuário não encontrado'
            }
            #swagger.responses[500] = {
                description: 'Erro ao tentar deletar o usuário',
                schema: {
                    mensagem: 'Erro no servidor!'
                }
            }
        */
    );

    app.patch('/user/:id',checkPermission.check, usuariosController.patchPassword
        /*
            #swagger.tags = ["User"]
            #swagger.summary = "Atualiza senha do usuário por ID"
            #swagger.description = 'Atualiza a senha de um usuário específico pelo ID'
            #swagger.parameters['id'] = {
                description: 'ID do usuário',
                in: 'path',
                name: 'id',
                required: true,
                type: 'integer',
                example: 1    
            }
            #swagger.parameters['user'] = {
                in: 'body',
                description: 'Dados para atualizar a senha do usuário',
                required: true,
                schema: {
                    "pass": "senha123",
                    "newpass": "novaSenha123"
                }
            }
            #swagger.responses[201] = {
                description: 'Senha do usuário atualizada',
                schema: {
                    mensagem: 'Senha atualizada com sucesso!'
                }
            }  
            #swagger.responses[404] = {
                description: 'Usuário não encontrado'
            }
            #swagger.responses[500] = {
                description: 'Erro ao tentar atualizar a senha do usuário',
                schema: {
                    mensagem: 'Erro no servidor!'
                }
            }
        */
    );
}
