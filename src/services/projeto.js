const db = require('../configs/pg');

const sql_get = 
    `select t_projeto.prj_id, 
            t_projeto.prj_nome,
            t_projeto.prj_descricao,
            t_projeto.prj_dataini,
            t_projeto.prj_datafim,
            t_projeto.stt_id
       from t_projeto
      where t_projeto.prj_id = $1`;

const getById = async (id) => {
    let projeto = {};
    await db.query(sql_get, [id])
        .then(ret => projeto = { total: ret.rows.length, projeto: ret.rows })
        .catch(err => projeto = err.stack);
    return projeto;
};

const sql_post = 
`insert into t_projeto 
        (prj_id, prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id)
 values ($1, $2, $3, $4, $5, $6) `

 const postProjeto = async (params) => {
    const {id, nome, descricao, dataini, datafim, status} = params
    await db.query(sql_post, [id, nome, descricao, dataini, datafim, status])
  }


module.exports.getById = getById;
module.exports.postProjeto = postProjeto;