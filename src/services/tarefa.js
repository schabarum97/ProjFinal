const db = require('../configs/pg');

const sql_get = `
    SELECT tar_id, tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id 
    FROM t_tarefas 
    WHERE tar_id = $1`;

const getById = async (id) => {
    const result = await db.query(sql_get, [id]);
    if (result.rows.length === 0) {
        const error = new Error('Tarefa não encontrada');
        error.status = 404;
        throw error;
    }
    return { total: result.rows.length, tarefa: result.rows };
};

const sql_post = `
    INSERT INTO t_tarefas (tar_descricao, tar_dataini, tar_datafim, tar_horasTrab, stt_id, fun_id, prj_id) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING tar_id`;

const postTarefa = async (params) => {
    const { descricao, dataini, datafim, horasTrab, status, funcionario, projeto } = params;
    const result = await db.query(sql_post, [descricao, dataini, datafim, horasTrab, status, funcionario, projeto]);
    return { mensagem: 'Tarefa criada com sucesso!', id: result.rows[0].tar_id };
};

const sql_put = `
    UPDATE t_tarefas 
       SET tar_descricao = $2,   
           tar_dataini = $3, 
           tar_datafim = $4, 
           tar_horasTrab = $5, 
           stt_id = $6, 
           fun_id = $7, 
           prj_id = $8 
     WHERE tar_id = $1`;

const putTarefa = async (params) => {
    const { id, descricao, dataini, datafim, horasTrab, status, funcionario, projeto } = params;
    const result = await db.query(sql_put, [id, descricao, dataini, datafim, horasTrab, status, funcionario, projeto]);
    if (result.rowCount === 0) {
        const error = new Error('Tarefa não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Tarefa atualizada com sucesso!' };
};

const sql_patch = `UPDATE t_tarefas SET `;

const patchTarefa = async (params) => {
    let fields = '';
    let binds = [params.id];
    let countParams = 1;

    if (params.descricao) {
        countParams++;
        fields += ` tar_descricao = $${countParams} `;
        binds.push(params.descricao);
    }
    if (params.dataini) {
        countParams++;
        fields += (fields ? ',' : '') + ` tar_dataini = $${countParams} `;
        binds.push(params.dataini);
    }
    if (params.datafim) {
        countParams++;
        fields += (fields ? ',' : '') + ` tar_datafim = $${countParams} `;
        binds.push(params.datafim);
    }
    if (params.horasTrab) {
        countParams++;
        fields += (fields ? ',' : '') + ` tar_horasTrab = $${countParams} `;
        binds.push(params.horasTrab);
    }
    if (params.status) {
        countParams++;
        fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
        binds.push(params.status);
    }
    if (params.funcionario) {
        countParams++;
        fields += (fields ? ',' : '') + ` fun_id = $${countParams} `;
        binds.push(params.funcionario);
    }
    if (params.projeto) {
        countParams++;
        fields += (fields ? ',' : '') + ` prj_id = $${countParams} `;
        binds.push(params.projeto);
    }

    let sql = sql_patch + fields + ' WHERE tar_id = $1 ';
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
        const error = new Error('Tarefa não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Tarefa atualizada com sucesso!' };
};

const sql_delete = `DELETE FROM t_tarefas WHERE tar_id = $1`;

const deleteTarefa = async (params) => {
    const { id } = params;
    const result = await db.query(sql_delete, [id]);
    if (result.rowCount === 0) {
        const error = new Error('Tarefa não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Tarefa deletada com sucesso!' };
};

module.exports.getById = getById;
module.exports.postTarefa = postTarefa;
module.exports.putTarefa = putTarefa;
module.exports.patchTarefa = patchTarefa;
module.exports.deleteTarefa = deleteTarefa;
