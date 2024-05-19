const db = require('../configs/pg');

const sql_get = 
    `SELECT t_funcionario.fun_id, 
            t_funcionario.fun_nome,
            t_funcionario.fun_funcao,
            t_funcionario.fun_email,
            t_funcionario.fun_telefone,
            t_funcionario.fun_cpf,
            t_funcionario.stt_id
       FROM t_funcionario
      WHERE t_funcionario.fun_id = $1`;

const getById = async (id) => {
    let funcionario = {};
    await db.query(sql_get, [id])
        .then(ret => funcionario = { total: ret.rows.length, funcionario: ret.rows })
        .catch(err => funcionario = err.stack);
    return funcionario;
};

const sql_post = 
`INSERT INTO t_funcionario 
        (fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id)
 VALUES ($1, $2, $3, $4, $5, $6) `

 const postFuncionario = async (params) => {
    const {nome, funcao, email, telefone, cpf, status} = params
    await db.query(sql_post, [nome, funcao, email, telefone, cpf, status])
}

  const sql_put =
  ` UPDATE t_funcionario
       SET fun_nome = $2,
           fun_funcao = $3,
           fun_email = $4,
           fun_telefone = $5,
           fun_cpf = $6,
           stt_id = $7
     WHERE fun_id = $1`
  
const putFuncionario = async(params) => {
      const {id, nome, funcao, email, telefone, cpf, status} = params
      return await db.query(sql_put, [id, nome, funcao, email, telefone, cpf, status])
}

const sql_patch = 
  `UPDATE t_funcionario 
      SET `

const patchFuncionario = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams ++
        fields += ` fun_nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.funcao) {
        countParams ++
        fields += (fields?',':'') + ` fun_funcao = $${countParams} `
        binds.push(params.funcao)
    }
    if (params.email) {
        countParams ++
        fields += (fields?',':'') + ` fun_email = $${countParams} `
        binds.push(params.email)
    }
    if (params.telefone) {
        countParams ++
        fields += (fields?',':'') + ` fun_telefone = $${countParams} `
        binds.push(params.telefone)
    }
    if (params.cpf) {
        countParams ++
        fields += (fields?',':'') + ` fun_cpf = $${countParams} `
        binds.push(params.cpf)
    }
    if (params.status) {
        countParams ++
        fields += (fields?',':'') + ` stt_id = $${countParams} `
        binds.push(params.status)
    }
    let sql = sql_patch + fields + ' where fun_id = $1 '
    return await db.query(sql, binds)
}

const sql_delete =
` DELETE FROM t_funcionario
   WHERE fun_id = $1 `

const deleteFuncionario = async(params) => {
    const {id} = params
    await db.query(sql_delete, [id])
} 

module.exports.getById = getById;
module.exports.postFuncionario = postFuncionario;
module.exports.putFuncionario = putFuncionario;
module.exports.patchFuncionario = patchFuncionario;
module.exports.deleteFuncionario = deleteFuncionario;