const db = require('../configs/pg');

const sql_get = `
    SELECT atv_id, atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id 
      FROM t_atividade 
     WHERE atv_id = $1`;

const getById = async (id) => {
    let atividade = {};
    await db.query(sql_get, [id])
        .then(ret => atividade = { total: ret.rows.length, atividade: ret.rows })
        .catch(err => atividade = err.stack);
    return atividade;
};

const sql_post = `
    INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
    VALUES ($1, $2, $3, $4, $5, $6)`;

const postAtividade = async (params) => {
    const { descricao, dataini, datafim, horasTrab, tarefa, status } = params;
    await db.query(sql_post, [descricao, dataini, datafim, horasTrab, tarefa, status]);
};

const sql_put = `
    UPDATE t_atividade 
       SET atv_descricao = $2, 
           atv_dataini = $3, 
           atv_datafim = $4, 
           atv_horasTrab = $5, 
           tar_id = $6, 
           stt_id = $7 
     WHERE atv_id = $1`;

const putAtividade = async (params) => {
    const { id, descricao, dataini, datafim, horasTrab, tarefa, status } = params;
    return await db.query(sql_put, [id, descricao, dataini, datafim, horasTrab, tarefa, status]);
};

const sql_patch = 
   `UPDATE t_atividade 
       SET `;

const patchAtividade = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;
    
    if (params.descricao) {
        countParams++;
        fields += ` atv_descricao = $${countParams} `;
        binds.push(params.descricao);
    }
    if (params.dataini) {
        countParams++;
        fields += (fields ? ',' : '') + ` atv_dataini = $${countParams} `;
        binds.push(params.dataini);
    }
    if (params.datafim) {
        countParams++;
        fields += (fields ? ',' : '') + ` atv_datafim = $${countParams} `;
        binds.push(params.datafim);
    }
    if (params.horasTrab) {
        countParams++;
        fields += (fields ? ',' : '') + ` atv_horasTrab = $${countParams} `;
        binds.push(params.horasTrab);
    }
    if (params.tarefa) {
        countParams++;
        fields += (fields ? ',' : '') + ` tar_id = $${countParams} `;
        binds.push(params.tarefa);
    }
    if (params.status) {
        countParams++;
        fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
        binds.push(params.status);
    }

    let sql = sql_patch + fields + ' WHERE atv_id = $1 ';
    return await db.query(sql, binds);
};

const sql_delete = 
   `DELETE FROM t_atividade 
     WHERE atv_id = $1`;

const deleteAtividade = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

module.exports.getById = getById;
module.exports.postAtividade = postAtividade;
module.exports.putAtividade = putAtividade;
module.exports.patchAtividade = patchAtividade;
module.exports.deleteAtividade = deleteAtividade;
