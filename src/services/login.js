const db = require('../configs/pg')
const jwt = require('jsonwebtoken')
const cript = require('../utils/salt')
const fs = require('fs')

const sql_get = 
`SELECT t_login.log_nome,
        t_login.log_salt, 
        t_login.log_pass
   FROM t_login
  WHERE t_login.log_nome = $1 `

  const login = async(params) => {
    const { user, pass } = params;
    const result = await db.query(sql_get, [user]);
    if (!result.rows.length) {
        throw new Error("Usuário não existe");
    } else {
        const salt = result.rows[0].log_salt;
        const password = result.rows[0].log_pass;
        if (cript.comparePassword(password, salt, pass)) {
            let perfilAcesso = result.rows[0].log_nome;
            const privateKey = fs.readFileSync("./src/private/private_key.pem");
            let token = jwt.sign({ perfilAcesso }, privateKey, { algorithm: 'RS256', expiresIn: '7d' });
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].log_nome,
                token: token
            };
        } else {
            throw { status: 400, type: 'WARN', message: 'Senha inválida!', detail: '' };
        }
    }
};

const newUser = async (req, res, next) => {
    try {
        const retorno = await userService.newUser(req.body)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}

module.exports.login = login;
module.exports.newUser = newUser;
