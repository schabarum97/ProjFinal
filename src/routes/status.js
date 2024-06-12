const statusController = require("../controllers/status");
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
  app.get("/status/id/:id",checkPermission.check, statusController.getById
    /*
        #swagger.tags = ["Status"]
        
        #swagger.summary = "Consulta Status por ID"
        
        #swagger.description = 'Consulta os detalhes de um Status específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Status',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[200] = {
            description: 'Sucesso!',
            schema: {
                    total: 1,
                    status: [
                        {
                            "stt_id": 1,
                            "stt_nome": "Em andamento",
                            "stt_tabela": "P",
                            "stt_dataini": "2024-01-01T03:00:00.000Z",
                            "stt_datafim": null,
                            "stt_cor": "#FFFF00"
                        }
                    ]
            }
        }

        #swagger.responses[404] = {
            description: 'Status não encontrado'
        }
    */
  );

  app.get("/status/table/:table",checkPermission.check, statusController.getByTable
    /*
        #swagger.tags = ["Status"]
        
        #swagger.summary = "Consulta Status por Tabela"
        
        #swagger.description = 'Consulta os detalhes de Status específicos por nome da tabela'
        
        #swagger.parameters['table'] = {
            description: 'Nome da Tabela',
            in: 'path',
            name: 'table',
            required: true,
            type: 'string',
            example: "users"    
        }

        #swagger.responses[200] = {
            description: 'Sucesso!',
            schema: {
                    total: 1,
                    status: [
                        {
                            "stt_id": 1,
                            "stt_nome": "Em andamento",
                            "stt_tabela": "P",
                            "stt_dataini": "2024-01-01T03:00:00.000Z",
                            "stt_datafim": null,
                            "stt_cor": "#FFFF00"
                        }
                    ]
            }
        }
        #swagger.responses[404] = {
            description: 'Tabela não encontrada'
        }
    */
  );

  app.post("/status",checkPermission.check, statusController.postStatus
    /* 
        #swagger.tags = ["Status"]
        #swagger.summary = "Cria um novo Status"
        #swagger.description = 'Cria um novo Status no sistema'
        #swagger.parameters['status'] = {
            in: 'body',
            description: 'Dados para criar um novo Status',
            required: true,
            schema: 
            {
                "nome": "96",
                "tabela": "Z",
                "dataini": "2024-05-16T00:00:00",
                "datafim": "2024-12-31T23:59:59",
                "cor": "#123456"
            }
        }
        #swagger.responses[201] = {
            description: 'Status criado',
            schema: {
                mensagem: 'Status criado com sucesso!'
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar o Status',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.put("/status/:id",checkPermission.check, statusController.putStatus
    /*
        #swagger.tags = ["Status"]
        
        #swagger.summary = "Atualiza Status por ID"
        
        #swagger.description = 'Atualiza os detalhes de um Status específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Status',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['status'] = {
            in: 'body',
            description: 'Dados para atualizar o Status',
            required: true,
            schema: {
                "nome": "Teste",
                "tabela": "P",
                "dataini": "2024-05-16T00:00:00",
                "datafim": "2024-12-31T23:59:59",
                "cor": "#123456"
            }
        }

        #swagger.responses[200] = {
            description: 'Status atualizado',
            schema: {
                mensagem: 'Status atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Status não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Status',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.patch("/status/:id",checkPermission.check, statusController.patchStatus
    /*
        #swagger.tags = ["Status"]
        
        #swagger.summary = "Atualiza parcialmente Status por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de um Status específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Status',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['status'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente o Status',
            required: true,
            schema: {
                "nome": "Teste"
            }
        }

        #swagger.responses[200] = {
            description: 'Status atualizado',
            schema: {
                mensagem: 'Status atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Status não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Status',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.delete("/status/:id",checkPermission.check, statusController.deleteStatus
    /*
        #swagger.tags = ["Status"]
        
        #swagger.summary = "Deleta Status por ID"
        
        #swagger.description = 'Deleta um Status específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Status',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[204] = {
            description: 'Status deletado',
            schema: {
                mensagem: 'Status deletado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Status não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar o Status',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );
};
