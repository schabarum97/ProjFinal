const funcionarioAtividadeController = require('../controllers/funcionarioatividade');

module.exports = (app) => {

    app.get('/funcionarioAtividade/id/:id', funcionarioAtividadeController.getById
    /*
        #swagger.tags = ["FuncionárioAtividade"]
        #swagger.summary = "Consulta FuncionárioAtividade por ID"
        #swagger.description = 'Consulta os detalhes de uma relação FuncionárioAtividade específica pelo ID'
        #swagger.parameters['id'] = {
            description: 'ID da relação FuncionárioAtividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[200] = {
            description: 'Sucesso!',
                schema:{
                "total": 1,
                "funcionarioAtividade": [
                    {
                    "fun_atv_id": 1,
                    "fun_id": 1,
                    "atv_id": 1,
                    "stt_id": 1
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Relação FuncionárioAtividade não encontrada'
        }
    */
    );

    app.post('/funcionarioAtividade', funcionarioAtividadeController.postFuncionarioAtividade
    /* 
        #swagger.tags = ["FuncionárioAtividade"]
        #swagger.summary = "Cria uma nova relação FuncionárioAtividade"
        #swagger.description = 'Cria uma nova relação FuncionárioAtividade no sistema'
        #swagger.parameters['funcionarioAtividade'] = {
            in: 'body',
            description: 'Dados para criar uma nova relação FuncionárioAtividade',
            required: true,
            schema: {
                "funcionario": 1,
                "atividade": 1,
                "status": 1
            }
        }
        #swagger.responses[201] = {
            description: 'Relação FuncionárioAtividade criada',
            schema: {
                mensagem: 'Relação FuncionárioAtividade criada com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar a relação FuncionárioAtividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.put('/funcionarioAtividade/:id', funcionarioAtividadeController.putFuncionarioAtividade
    /*
        #swagger.tags = ["FuncionárioAtividade"]
        #swagger.summary = "Atualiza relação FuncionárioAtividade por ID"
        #swagger.description = 'Atualiza os detalhes de uma relação FuncionárioAtividade específica pelo ID'
        #swagger.parameters['id'] = {
            description: 'ID da relação FuncionárioAtividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['funcionarioAtividade'] = {
            in: 'body',
            description: 'Dados para atualizar a relação FuncionárioAtividade',
            required: true,
            schema: {
                "funcionario": 1,
                "atividade": 1,
                "status": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Relação FuncionárioAtividade atualizada',
            schema: {
                mensagem: 'Relação FuncionárioAtividade atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação FuncionárioAtividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a relação FuncionárioAtividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.patch('/funcionarioAtividade/:id', funcionarioAtividadeController.patchFuncionarioAtividade
    /*
        #swagger.tags = ["FuncionárioAtividade"]
        #swagger.summary = "Atualiza parcialmente relação FuncionárioAtividade por ID"
        #swagger.description = 'Atualiza parcialmente os detalhes de uma relação FuncionárioAtividade específica pelo ID'
        #swagger.parameters['id'] = {
            description: 'ID da relação FuncionárioAtividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['funcionarioAtividade'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente a relação FuncionárioAtividade',
            required: true,
            schema: {
                "atividade": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Relação FuncionárioAtividade atualizada',
            schema: {
                mensagem: 'Relação FuncionárioAtividade atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação FuncionárioAtividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a relação FuncionárioAtividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.delete('/funcionarioAtividade/:id', funcionarioAtividadeController.deleteFuncionarioAtividade
    /*
        #swagger.tags = ["FuncionárioAtividade"]
        #swagger.summary = "Deleta relação FuncionárioAtividade por ID"
        #swagger.description = 'Deleta uma relação FuncionárioAtividade específica pelo ID'
        #swagger.parameters['id'] = {
            description: 'ID da relação FuncionárioAtividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[204] = {
            description: 'Relação FuncionárioAtividade deletada',
            schema: {
                mensagem: 'Relação FuncionárioAtividade deletada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação FuncionárioAtividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar a relação FuncionárioAtividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );
};
