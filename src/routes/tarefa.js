const tarefaController = require("../controllers/tarefa");

module.exports = (app) => {
  app.get(
    "/tarefa/id/:id",
    tarefaController.getById
    /*
        #swagger.tags = ["Tarefa"]
        
        #swagger.summary = "Consulta Tarefa por ID"
        
        #swagger.description = 'Consulta os detalhes de uma Tarefa específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Tarefa',
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
                "tarefa": [
                    {
                    "tar_id": 1,
                    "tar_descricao": "Desenvolver funcionalidade X",
                    "tar_dataini": "2024-01-01T03:00:00.000Z",
                    "tar_datafim": "2024-01-10T03:00:00.000Z",
                    "tar_horastrab": "08:00:00",
                    "stt_id": 3,
                    "fun_id": 1,
                    "prj_id": 1
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Tarefa não encontrada'
        }
    */
  );

  app.post(
    "/tarefa",
    tarefaController.postTarefa
    /* 
        #swagger.tags = ["Tarefa"]
        #swagger.summary = "Cria uma nova Tarefa"
        #swagger.description = 'Cria uma nova Tarefa no sistema'
        #swagger.parameters['tarefa'] = {
            in: 'body',
            description: 'Dados para criar uma nova Tarefa',
            required: true,
            schema: {
                "descricao": "Desenvolver a API para integração com o sistema X",
                "dataini": "2024-05-20T08:00:00Z",
                "datafim": "2024-05-25T17:00:00Z",
                "horasTrab": "08:00:00",
                "status": 1,
                "funcionario": 1,
                "projeto": 1
            }

        }
        #swagger.responses[201] = {
            description: 'Tarefa criada',
            schema: {
                mensagem: 'Tarefa criada com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar a Tarefa',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.put(
    "/tarefa/:id",
    tarefaController.putTarefa
    /*
        #swagger.tags = ["Tarefa"]
        
        #swagger.summary = "Atualiza Tarefa por ID"
        
        #swagger.description = 'Atualiza os detalhes de uma Tarefa específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Tarefa',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['tarefa'] = {
            in: 'body',
            description: 'Dados para atualizar a Tarefa',
            required: true,
            schema: {
                "descricao": "Desenvolver a API para integração com o sistema X",
                "dataini": "2024-05-20T08:00:00Z",
                "datafim": "2024-05-25T17:00:00Z",
                "horasTrab": "08:00:00",
                "status": 1,
                "funcionario": 1,
                "projeto": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Tarefa atualizada',
            schema: {
                mensagem: 'Tarefa atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Tarefa não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a Tarefa',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.patch(
    "/tarefa/:id",
    tarefaController.patchTarefa
    /*
        #swagger.tags = ["Tarefa"]
        
        #swagger.summary = "Atualiza parcialmente Tarefa por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de uma Tarefa específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Tarefa',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['tarefa'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente a Tarefa',
            required: true,
            schema: {
                "descricao": "Desenvolver a API para integração com o sistema X"
            }
        }

        #swagger.responses[200] = {
            description: 'Tarefa atualizada',
            schema: {
                mensagem: 'Tarefa atualizada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Tarefa não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar a Tarefa',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.delete(
    "/tarefa/:id",
    tarefaController.deleteTarefa
    /*
        #swagger.tags = ["Tarefa"]
        
        #swagger.summary = "Deleta Tarefa por ID"
        
        #swagger.description = 'Deleta uma Tarefa específica pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID da Tarefa',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[200] = {
            description: 'Tarefa deletada',
            schema: {
                mensagem: 'Tarefa deletada com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Tarefa não encontrada'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar a Tarefa',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );
};
