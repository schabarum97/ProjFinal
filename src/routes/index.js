const Login = require('./login');
const Status = require('./status');
const Funcionario = require('./funcionario');
const Projeto = require('./projeto');
const Tarefa = require('./tarefa');
const Atividade = require('./atividade');
const ProjetoFuncionario = require('./projetofuncionario');
const FuncionarioAtividade = require('./funcionarioatividade');
const Usuario = require('./user');

module.exports = (app) => {
    Login(app),
    Status(app),
    Funcionario(app),
    Projeto(app),
    Tarefa(app)
    Atividade(app),
    ProjetoFuncionario(app),
    FuncionarioAtividade(app),
    Usuario(app)
}