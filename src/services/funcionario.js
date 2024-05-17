const db = require('../configs/pg');

const sql_get = 
    `select t_funcionario.fun_id, 
            t_funcionario.fun_nome,
            t_funcionario.fun_funcao,
            t_funcionario.fun_email,
            t_funcionario.fun_telefone,
            t_funcionario.fun_cpf,
            t_funcionario.stt_id
       from t_funcionario
      where t_funcionario.fun_id = $1`;

const getById = async (id) => {
    let funcionario = {};
    await db.query(sql_get, [id])
        .then(ret => funcionario = { total: ret.rows.length, funcionario: ret.rows })
        .catch(err => funcionario = err.stack);
    return funcionario;
};

const sql_post = 
`insert into t_funcionario 
        (fun_id, fun_nome, fun_funcao, fun_email, fun_telefone, fun_cpf, stt_id)
 values ($1, $2, $3, $4, $5, $6, $7) `

 const postFuncionario = async (params) => {
    const {id, nome, funcao, email, telefone, cpf, status} = params
    await db.query(sql_post, [id, nome, funcao, email, telefone, cpf, status])
}

  const sql_put =
  ` update t_funcionario
       set fun_nome = $2,
           fun_funcao = $3,
           fun_email = $4,
           fun_telefone = $5,
           fun_cpf = $6,
           stt_id = $7
     where fun_id = $1`
  
const putFuncionario = async(params) => {
      const {id, nome, funcao, email, telefone, cpf, status} = params
      return await db.query(sql_put, [id, nome, funcao, email, telefone, cpf, status])
}

const sql_patch = 
  `update t_funcionario 
      set `

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
` delete from t_funcionario
   where fun_id = $1 `

const deleteFuncionario = async(params) => {
    const {id} = params
    await db.query(sql_delete, [id])
} 

module.exports.getById = getById;
module.exports.postFuncionario = postFuncionario;
module.exports.putFuncionario = putFuncionario;
module.exports.patchFuncionario = patchFuncionario;
module.exports.deleteFuncionario = deleteFuncionario;