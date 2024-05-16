const Login = require('./login');
const Status = require('./status');

module.exports = (app) => {
    Login(app),
    Status(app)
}