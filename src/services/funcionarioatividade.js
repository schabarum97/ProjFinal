const db = require('../configs/pg');

const sql_get = `
    SELECT fun_atv_id, fun_id, atv_id, stt_id 
    FROM l_funcionario_atividade 
    WHERE fun_atv_id = $1`;

const getById = async (id) => {
    const result = await db.query(sql_get, [id]);
    if (result.rows.length === 0) {
        const error = new Error('Relação FuncionárioAtividade não encontrada');
        error.status = 404;
        throw error;
    }
    return { total: result.rows.length, funcionarioAtividade: result.rows };
};

const sql_post = `
    INSERT INTO l_funcionario_atividade (fun_id, atv_id, stt_id) 
    VALUES ($1, $2, $3) RETURNING fun_atv_id`;

    
const postFuncionarioAtividade = async (params) => {
    const { funcionario, atividade, status } = params;
    const result = await db.query(sql_post, [funcionario, atividade, status]);
    console.log(funcionario);
    return { mensagem: 'Relação FuncionárioAtividade criada com sucesso!', id: result.rows[0].fun_atv_id };
};

const sql_put = `
    UPDATE l_funcionario_atividade 
       SET fun_id = $2, 
           atv_id = $3, 
           stt_id = $4 
     WHERE fun_atv_id = $1`;

const putFuncionarioAtividade = async (params) => {
    const { id, funcionario, atividade, status } = params;
    const result = await db.query(sql_put, [id, funcionario, atividade, status]);
    if (result.rowCount === 0) {
        const error = new Error('Relação FuncionárioAtividade não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Relação FuncionárioAtividade atualizada com sucesso!' };
};

const sql_patch = `
    UPDATE l_funcionario_atividade 
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
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
        const error = new Error('Relação FuncionárioAtividade não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Relação FuncionárioAtividade atualizada com sucesso!' };
};

const sql_delete = `
    DELETE FROM l_funcionario_atividade 
     WHERE fun_atv_id = $1`;

const deleteFuncionarioAtividade = async (params) => {
    const { id } = params;
    const result = await db.query(sql_delete, [id]);
    if (result.rowCount === 0) {
        const error = new Error('Relação FuncionárioAtividade não encontrada');
        error.status = 404;
        throw error;
    }
    return { mensagem: 'Relação FuncionárioAtividade deletada com sucesso!' };
};

module.exports.getById = getById;
module.exports.postFuncionarioAtividade = postFuncionarioAtividade;
module.exports.putFuncionarioAtividade = putFuncionarioAtividade;
module.exports.patchFuncionarioAtividade = patchFuncionarioAtividade;
module.exports.deleteFuncionarioAtividade = deleteFuncionarioAtividade;
