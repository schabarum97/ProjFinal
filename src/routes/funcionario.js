const funcionarioController = require("../controllers/funcionario");

module.exports = (app) => {
  app.get(
    "/funcionario/id/:id",
    funcionarioController.getById
    /*
        #swagger.tags = ["Funcionário"]
        
        #swagger.summary = "Consulta Funcionário por ID"
        
        #swagger.description = 'Consulta os detalhes de um Funcionário específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Funcionário',
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
                "funcionario": [
                    {
                    "fun_id": 1,
                    "fun_nome": "João Silva",
                    "fun_funcao": "Desenvolvedor",
                    "fun_email": "joao.silva@example.com",
                    "fun_telefone": "123456789",
                    "fun_cpf": "123.456.789-00",
                    "stt_id": 1
                    }
                ]
            }
        }
        #swagger.responses[404] = {
            description: 'Funcionário não encontrado'
        }
    */
  );

  app.post(
    "/funcionario",
    funcionarioController.postFuncionario
    /* 
        #swagger.tags = ["Funcionário"]
        #swagger.summary = "Cria um novo Funcionário"
        #swagger.description = 'Cria um novo Funcionário no sistema'
        #swagger.parameters['funcionario'] = {
            in: 'body',
            description: 'Dados para criar um novo Funcionário',
            required: true,
            schema: {
                "nome": "João Silvaa",
                "funcao": "Desenvolvedor",
                "email": "joao.silva@example.com",
                "telefone": "11987654321",
                "cpf": "12345678901",
                "status": 1
            }
        }
        #swagger.responses[201] = {
            description: 'Funcionário criado',
            schema: {
                mensagem: 'Funcionário criado com sucesso!',
                id: 1
            }
        }  
        #swagger.responses[500] = {
            description: 'Erro ao tentar criar o Funcionário',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.put(
    "/funcionario/:id",
    funcionarioController.putFuncionario
    /*
        #swagger.tags = ["Funcionário"]
        
        #swagger.summary = "Atualiza Funcionário por ID"
        
        #swagger.description = 'Atualiza os detalhes de um Funcionário específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Funcionário',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['funcionario'] = {
            in: 'body',
            description: 'Dados para atualizar o Funcionário',
            required: true,
            schema: {
                "nome": "João Silvaa",
                "funcao": "Desenvolvedor",
                "email": "joao.silva@example.com",
                "telefone": "11987654321",
                "cpf": "12345678901",
                "status": 1
            }
        }

        #swagger.responses[200] = {
            description: 'Funcionário atualizado',
            schema: {
                mensagem: 'Funcionário atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Funcionário não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Funcionário',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.patch(
    "/funcionario/:id",
    funcionarioController.patchFuncionario
    /*
        #swagger.tags = ["Funcionário"]
        
        #swagger.summary = "Atualiza parcialmente Funcionário por ID"
        
        #swagger.description = 'Atualiza parcialmente os detalhes de um Funcionário específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Funcionário',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.parameters['funcionario'] = {
            in: 'body',
            description: 'Dados para atualizar parcialmente o Funcionário',
            required: true,
            schema: {
                "nome": "João Silvaa"
            }
        }

        #swagger.responses[200] = {
            description: 'Funcionário atualizado',
            schema: {
                mensagem: 'Funcionário atualizado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Funcionário não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar atualizar o Funcionário',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );

  app.delete(
    "/funcionario/:id",
    funcionarioController.deleteFuncionario
    /*
        #swagger.tags = ["Funcionário"]
        
        #swagger.summary = "Deleta Funcionário por ID"
        
        #swagger.description = 'Deleta um Funcionário específico pelo ID'
        
        #swagger.parameters['id'] = {
            description: 'ID do Funcionário',
            in: 'path',
            name: 'id',
            required: true,
            type: 'integer',
            example: 1    
        }

        #swagger.responses[204] = {
            description: 'Funcionário deletado',
            schema: {
                mensagem: 'Funcionário deletado com sucesso!'
            }
        }  
        #swagger.responses[404] = {
            description: 'Funcionário não encontrado'
        }
        #swagger.responses[500] = {
            description: 'Erro ao tentar deletar o Funcionário',
            schema: {
                mensagem: 'Erro no servidor!'
            }
        }    
    */
  );
};
