const db = require('../configs/pg');

const sql_get = `
    SELECT fun_atv_id, fun_id, atv_id, stt_id 
    FROM l_funcionario_atividade 
    WHERE fun_atv_id = $1`;

const getById = async (id) => {
    let funcionarioAtividade = {};
    await db.query(sql_get, [id])
        .then(ret => funcionarioAtividade = { total: ret.rows.length, funcionarioAtividade: ret.rows })
        .catch(err => funcionarioAtividade = err.stack);
    return funcionarioAtividade;
};

const sql_post = `
    INSERT INTO l_funcionario_atividade (fun_id, atv_id, stt_id) 
    VALUES ($1, $2, $3)`;

const postFuncionarioAtividade = async (params) => {
    const { funcionario, atividade, status } = params;
    await db.query(sql_post, [funcionario, atividade, status]);
};

const sql_put = `
    UPDATE l_funcionario_atividade 
       SET fun_id = $2, 
           atv_id = $3, 
           stt_id = $4 
     WHERE fun_atv_id = $1`;

const putFuncionarioAtividade = async (params) => {
    const { id, funcionario, atividade, status } = params;
    return await db.query(sql_put, [id, funcionario, atividade, status]);
};

const sql_patch = 
   `UPDATE l_funcionario_atividade 
       SET `;

const patchFuncionarioAtividade = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;
    
    if (params.funcionario) {
        countParams++;
        fields += ` fun_id = $${countParams} `;
        binds.push(params.funcionario);
    }
    if (params.atividade) {
        countParams++;
        fields += (fields ? ',' : '') + ` atv_id = $${countParams} `;
        binds.push(params.atividade);
    }
    if (params.status) {
        countParams++;
        fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
        binds.push(params.status);
    }

    let sql = sql_patch + fields + ' WHERE fun_atv_id = $1 ';
    return await db.query(sql, binds);
};

const sql_delete = 
   `DELETE FROM l_funcionario_atividade 
     WHERE fun_atv_id = $1`;

const deleteFuncionarioAtividade = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

module.exports.getById = getById;
module.exports.postFuncionarioAtividade = postFuncionarioAtividade;
module.exports.putFuncionarioAtividade = putFuncionarioAtividade;
module.exports.patchFuncionarioAtividade = patchFuncionarioAtividade;
module.exports.deleteFuncionarioAtividade = deleteFuncionarioAtividade;
