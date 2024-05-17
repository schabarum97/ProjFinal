const db = require('../configs/pg');

const sql_get = 
    `select t_status.stt_id, 
            t_status.stt_nome,
            t_status.stt_tabela,
            t_status.stt_dataini,
            t_status.stt_datafim,
            t_status.stt_cor
       from t_status
      where t_status.stt_id = $1`;

const getById = async (id) => {
    let status = {};
    await db.query(sql_get, [id])
        .then(ret => status = { total: ret.rows.length, status: ret.rows })
        .catch(err => status = err.stack);
    return status;
};

const sql_get_table = 
    `select t_status.stt_id, 
            t_status.stt_nome,
            t_status.stt_tabela,
            t_status.stt_dataini,
            t_status.stt_datafim,
            t_status.stt_cor
       from t_status
      where t_status.stt_tabela = $1`;

const getByTable = async (table) => {
    let status = {};
    await db.query(sql_get_table, [table])
        .then(ret => status = { total: ret.rows.length, status: ret.rows })
        .catch(err => status = err.stack);
    return status;
};

const sql_post = 
`insert into t_status 
        (stt_id, stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor)
 values ($1, $2, $3, $4, $5, $6) `

 const postStatus = async (params) => {
    const {id, nome, tabela, dataini, datafim, cor} = params
    await db.query(sql_post, [id, nome, tabela, dataini, datafim, cor])
  }

const sql_put =
` update t_status
     set stt_nome = $2,
         stt_tabela = $3,
         stt_dataini = $4,
         stt_datafim = $5,
         stt_cor = $6
   where stt_id = $1`

const putStatus = async(params) => {
    const {id, nome, tabela, dataini, datafim, cor} = params
    return await db.query(sql_put, [id, nome, tabela, dataini, datafim, cor])
  }


const sql_patch = 
  `update t_status 
      set `

const patchStatus = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams ++
        fields += ` stt_nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.tabela) {
        countParams ++
        fields += (fields?',':'') + ` stt_tabela = $${countParams} `
        binds.push(params.tabela)
    }
    if (params.dataini) {
        countParams ++
        fields += (fields?',':'') + ` stt_dataini = $${countParams} `
        binds.push(params.dataini)
    }
    if (params.datafim) {
        countParams ++
        fields += (fields?',':'') + ` stt_datafim = $${countParams} `
        binds.push(params.datafim)
    }
    if (params.cor) {
        countParams ++
        fields += (fields?',':'') + ` stt_cor = $${countParams} `
        binds.push(params.cor)
    }
    let sql = sql_patch + fields + ' where stt_id = $1 '
    return await db.query(sql, binds)
}


const sql_delete =
` delete from t_status
   where stt_id = $1 `

const deleteStatus = async(params) => {
    const {id} = params
    await db.query(sql_delete, [id])
} 

module.exports.getById = getById;
module.exports.getByTable = getByTable;
module.exports.postStatus = postStatus;
module.exports.putStatus = putStatus;
module.exports.patchStatus = patchStatus;
module.exports.deleteStatus = deleteStatus;