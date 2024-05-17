const Login = require('./login');
const Status = require('./status');
const Funcionario = require('./funcionario');
const Projeto = require('./projeto');

module.exports = (app) => {
    Login(app),
    Status(app),
    Funcionario(app),
    Projeto(app)
}