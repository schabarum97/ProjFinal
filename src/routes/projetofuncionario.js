const projetoFuncionarioController = require('../controllers/projetofuncionario');

module.exports = (app) => {

    app.get('/projetoFuncionario/id/:id', projetoFuncionarioController.getById
    /*
        #swagger.tags = ["ProjetoFuncionario"]
        
        #swagger.summary = "Consulta ProjetoFuncionario por ID"
        
        #swagger.description = 'Consulta os detalhes de uma relação ProjetoFuncionario específica pelo ID'

        #swagger.parameters['id'] = {
            description: 'ID da relação ProjetoFuncionario',
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
                "projetoFuncionario": [
                    {
                    "prj_fun_id": 1,
                    "prj_id": null,
                    "tar_id": null,
                    "stt_id": null
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Relação ProjetoFuncionario não encontrada'
        }
    */
    );

    app.post('/projetoFuncionario', projetoFuncionarioController.postProjetoFuncionario
    /* 
        #swagger.tags = ["ProjetoFuncionario"]
        #swagger.summary = "Cria uma nova relação ProjetoFuncionario"
        #swagger.description = 'Cria uma nova relação ProjetoFuncionario no sistema'
        #swagger.parameters['projetoFuncionario'] = {
            in: 'body',
            description: 'Dados para criar uma nova relação ProjetoFuncionario',
            required: true,
            schema: {
                "projeto": 1,
                "tarefa": 1,
                "status": 1
            }
        }
        #swagger.responses[201] = {
            description: 'Relação ProjetoFuncionario criada',
            schema: {
                mensagem: 'Relação ProjetoFuncionario criada com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar a relação ProjetoFuncionario',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.put('/projetoFuncionario/:id', projetoFuncionarioController.putProjetoFuncionario
    /*
        #swagger.tags = ["ProjetoFuncionario"]
        
        #swagger.summary = "Atualiza relação ProjetoFuncionario por ID"
        
        #swagger.description = 'Atualiza os detalhes de uma relação ProjetoFuncionario específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da relação ProjetoFuncionario',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['projetoFuncionario'] = {
            in: 'body',
            description: 'Dados para atualizar a relação ProjetoFuncionario',
            required: true,
            schema: {
                "status": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Relação ProjetoFuncionario atualizada',
            schema: {
                mensagem: 'Relação ProjetoFuncionario atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação ProjetoFuncionario não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a relação ProjetoFuncionario',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.patch('/projetoFuncionario/:id', projetoFuncionarioController.patchProjetoFuncionario
    /*
        #swagger.tags = ["ProjetoFuncionario"]
        
        #swagger.summary = "Atualiza parcialmente relação ProjetoFuncionario por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de uma relação ProjetoFuncionario específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da relação ProjetoFuncionario',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['projetoFuncionario'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente a relação ProjetoFuncionario',
            required: true,
            schema: {
                "status": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Relação ProjetoFuncionario atualizada',
            schema: {
                mensagem: 'Relação ProjetoFuncionario atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação ProjetoFuncionario não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a relação ProjetoFuncionario',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );

    app.delete('/projetoFuncionario/:id', projetoFuncionarioController.deleteProjetoFuncionario
    /*
        #swagger.tags = ["ProjetoFuncionario"]
        
        #swagger.summary = "Deleta relação ProjetoFuncionario
    /*
        #swagger.description = 'Deleta uma relação ProjetoFuncionario específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da relação ProjetoFuncionario',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[204] = {
            description: 'Relação ProjetoFuncionario deletada',
            schema: {
                mensagem: 'Relação ProjetoFuncionario deletada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Relação ProjetoFuncionario não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar a relação ProjetoFuncionario',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
    );
};
