const atividadeController = require("../controllers/atividade");

module.exports = (app) => {
  app.get(
    "/atividade/id/:id",
    atividadeController.getById
    /*
        #swagger.tags = ["Atividade"]
        
        #swagger.summary = "Consulta Atividade por ID"
        
        #swagger.description = 'Consulta os detalhes de uma Atividade específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Atividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[200] = {
            description: 'Sucesso!',
            schema: {
                "total": 1,
                "atividade": [
                    {
                    "atv_id": 1,
                    "atv_descricao": "Atualizar diagrama de classes",
                    "atv_dataini": "2024-01-05T03:00:00.000Z",
                    "atv_datafim": "2024-01-07T03:00:00.000Z",
                    "atv_horastrab": "10:00:00",
                    "tar_id": 2,
                    "stt_id": 4
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Atividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro interno ao tentar fazer a busca'
        }
    */
  );

  app.post(
    "/atividade",
    atividadeController.postAtividade
    /* 
        #swagger.tags = ["Atividade"]
        #swagger.summary = "Cria uma nova Atividade"
        #swagger.description = 'Cria uma nova Atividade no sistema'
        #swagger.parameters['atividade'] = {
            in: 'body',
            description: 'Dados para criar uma nova Atividade',
            required: true,
            schema: {
                "descricao": "Revisar código e implementar melhorias",
                "dataini": "2024-05-20",
                "datafim": "2024-05-21",
                "horasTrab": "08:00:00",
                "tarefa": 1,
                "status": 1
            }
        }
        #swagger.responses[201] = {
            description: 'Atividade criada',
            schema: {
                mensagem: 'Atividade criada com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar a Atividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.put(
    "/atividade/:id",
    atividadeController.putAtividade
    /*
        #swagger.tags = ["Atividade"]
        
        #swagger.summary = "Atualiza Atividade por ID"
        
        #swagger.description = 'Atualiza os detalhes de uma Atividade específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Atividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['atividade'] = {
            in: 'body',
            description: 'Dados para atualizar a Atividade',
            required: true,
            schema: {
                "descricao": "Revisar código e implementar melhorias",
                "dataini": "2024-05-20",
                "datafim": "2024-05-21",
                "horasTrab": "08:00:00",
                "tarefa": 123,
                "status": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Atividade atualizada',
            schema: {
                mensagem: 'Atividade atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Atividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a Atividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.patch(
    "/atividade/:id",
    atividadeController.patchAtividade
    /*
        #swagger.tags = ["Atividade"]
        
        #swagger.summary = "Atualiza parcialmente Atividade por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de uma Atividade específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Atividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['atividade'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente a Atividade',
            required: true,
            schema: {
                "descricao": "Revisar código e implementar melhorias"
            }
        }

        #swagger.responses[200] = {
            description: 'Atividade atualizada',
            schema: {
                mensagem: 'Atividade atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Atividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a Atividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.delete(
    "/atividade/:id",
    atividadeController.deleteAtividade
    /*
        #swagger.tags = ["Atividade"]
        
        #swagger.summary = "Deleta Atividade por ID"
        
        #swagger.description = 'Deleta uma Atividade específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Atividade',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[200] = {
            description: 'Atividade deletada',
            schema: {
                mensagem: 'Atividade deletada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Atividade não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar a Atividade',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );
};
