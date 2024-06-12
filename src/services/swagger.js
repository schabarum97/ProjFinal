const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API Trabalho Final",
        description:"Documentação da API do trabalho final"
    },
    host: "localhost:3000",
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        basicAuth: {
            type: "basic",
            description: "Autenticação básica"
        }
    },
    security: [
        {
            basicAuth: []
        }
    ]
}

const outputFile = 'src/docs/swagger.yaml';
const endpointsFiles = [
    'src/routes/status.js',
    'src/routes/tarefa.js',
    'src/routes/projeto.js',
    'src/routes/atividade.js',
    'src/routes/login.js',
    'src/routes/funcionario.js',
    'src/routes/funcionarioatividade.js',
    'src/routes/projetofuncionario.js',
    'src/routes/user'
];
swaggerAutogen(outputFile, endpointsFiles, doc);