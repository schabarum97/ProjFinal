const projetoController = require("../controllers/projeto");
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
  app.get("/projeto/id/:id",checkPermission.check, projetoController.getById
    /*
        #swagger.tags = ["Projeto"]
        
        #swagger.summary = "Consulta Projeto por ID"
        
        #swagger.description = 'Consulta os detalhes de um Projeto específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Projeto',
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
                "projeto": [
                    {
                    "prj_id": 1,
                    "prj_nome": "Projeto A",
                    "prj_descricao": "Descrição do Projeto A",
                    "prj_dataini": "2024-01-01T03:00:00.000Z",
                    "prj_datafim": "2024-12-31T03:00:00.000Z",
                    "stt_id": 1
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Projeto não encontrado'
        }
    */
  );

  app.post("/projeto",checkPermission.check, projetoController.postProjeto
    /* 
        #swagger.tags = ["Projeto"]
        #swagger.summary = "Cria um novo Projeto"
        #swagger.description = 'Cria um novo Projeto no sistema'
        #swagger.parameters['projeto'] = {
            in: 'body',
            description: 'Dados para criar um novo Projeto',
            required: true,
            schema: {
            "nome": "Projeto A",
            "descricao": "a",
            "dataini": "2024-01-01",
            "datafim": "2024-12-31",
            "status": 2
            }
        }
        #swagger.responses[201] = {
            description: 'Projeto criado',
            schema: {
                mensagem: 'Projeto criado com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar o Projeto',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.put("/projeto/:id",checkPermission.check, projetoController.putProjeto
    /*
        #swagger.tags = ["Projeto"]
        
        #swagger.summary = "Atualiza Projeto por ID"
        
        #swagger.description = 'Atualiza os detalhes de um Projeto específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Projeto',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['projeto'] = {
            in: 'body',
            description: 'Dados para atualizar o Projeto',
            required: true,
            schema: {
                "nome": "Projeto B",
                "descricao": "a",
                "dataini": "2024-01-01",
                "datafim": "2024-12-31",
                "status": 2
            }
        }

        #swagger.responses[200] = {
            description: 'Projeto atualizado',
            schema: {
                mensagem: 'Projeto atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Projeto não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Projeto',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.patch("/projeto/:id",checkPermission.check, projetoController.patchProjeto
    /*
        #swagger.tags = ["Projeto"]
        
        #swagger.summary = "Atualiza parcialmente Projeto por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de um Projeto específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Projeto',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['projeto'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente o Projeto',
            required: true,
            schema: {
                "nome": "Projeto B"
            }
        }

        #swagger.responses[200] = {
            description: 'Projeto atualizado',
            schema: {
                mensagem: 'Projeto atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Projeto não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Projeto',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.delete("/projeto/:id",checkPermission.check, projetoController.deleteProjeto
    /*
        #swagger.tags = ["Projeto"]
        
        #swagger.summary = "Deleta Projeto por ID"
        
        #swagger.description = 'Deleta um Projeto específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Projeto',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[204] = {
            description: 'Projeto deletado',
            schema: {
                mensagem: 'Projeto deletado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Projeto não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar o Projeto',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );
};
