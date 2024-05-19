const db = require('../configs/pg');

const sql_get = 
    `SELECT t_projeto.prj_id, 
            t_projeto.prj_nome,
            t_projeto.prj_descricao,
            t_projeto.prj_dataini,
            t_projeto.prj_datafim,
            t_projeto.stt_id
       FROM t_projeto
      WHERE t_projeto.prj_id = $1`;

const getById = async (id) => {
    let projeto = {};
    await db.query(sql_get, [id])
        .then(ret => projeto = { total: ret.rows.length, projeto: ret.rows })
        .catch(err => projeto = err.stack);
    return projeto;
};

const sql_post = 
`INSERT INTO t_projeto 
        (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id)
 VALUES ($1, $2, $3, $4, $5) `

 const postProjeto = async (params) => {
    const {nome, descricao, dataini, datafim, status} = params
    await db.query(sql_post, [nome, descricao, dataini, datafim, status])
}

const sql_put =
` UPDATE t_projeto
     SET prj_nome = $2,
         prj_descricao = $3,
         prj_dataini = $4,
         prj_datafim = $5,
         stt_id = $6
   WHERE prj_id = $1`

const putProjeto = async(params) => {
    const {id, nome, descricao, dataini, datafim, status} = params
    return await db.query(sql_put, [id, nome, descricao, dataini, datafim, status])
}

const sql_patch = 
  `UPDATE t_projeto 
      SET `

const patchProjeto = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams ++
        fields += ` prj_nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.descricao) {
        countParams ++
        fields += (fields?',':'') + ` prj_descricao = $${countParams} `
        binds.push(params.descricao)
    }
    if (params.dataini) {
        countParams ++
        fields += (fields?',':'') + ` prj_dataini = $${countParams} `
        binds.push(params.dataini)
    }
    if (params.datafim) {
        countParams ++
        fields += (fields?',':'') + ` prj_datafim = $${countParams} `
        binds.push(params.datafim)
    }
    if (params.status) {
        countParams ++
        fields += (fields?',':'') + ` stt_id = $${countParams} `
        binds.push(params.status)
    }
    let sql = sql_patch + fields + ' where prj_id = $1 '
    return await db.query(sql, binds)
}

const sql_delete =
` DELETE FROM t_projeto
   WHERE prj_id = $1 `

const deleteProjeto = async(params) => {
    const {id} = params
    await db.query(sql_delete, [id])
} 


module.exports.getById = getById;
module.exports.postProjeto = postProjeto;
module.exports.putProjeto = putProjeto;
module.exports.patchProjeto = patchProjeto;
module.exports.deleteProjeto = deleteProjeto;

