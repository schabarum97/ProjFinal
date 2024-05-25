const db = require('../configs/pg');

const sql_get = `
    SELECT atv_id, atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id 
      FROM t_atividade 
     WHERE atv_id = $1`;

const getById = async (id) => {
    try {
        const result = await db.query(sql_get, [id]);
        if (result.rows.length === 0) {
            throw new Error('NotFound');
        }
        return { total: result.rows.length, atividade: result.rows };
    } catch (err) {
        if (err.message == 'NotFound'){
            throw {status: 404, message: 'Atividade não encontrada'};
        }
        throw { status: 500, message: 'Erro ao buscar Atividade' };    
    }
};

const sql_post = `
    INSERT INTO t_atividade (atv_descricao, atv_dataini, atv_datafim, atv_horasTrab, tar_id, stt_id) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING atv_id`;

const postAtividade = async (params) => {
    try {
        const { descricao, dataini, datafim, horasTrab, tarefa, status } = params;
        const result = await db.query(sql_post, [descricao, dataini, datafim, horasTrab, tarefa, status]);
        return { mensagem: 'Atividade criada com sucesso!', id: result.rows[0].atv_id };
    } catch (err) {
        throw new Error('Erro ao tentar criar a Atividade');
    }
};

const sql_put = `
    UPDATE t_atividade 
       SET atv_descricao = $2, 
           atv_dataini = $3, 
           atv_datafim = $4, 
           atv_horasTrab = $5, 
           tar_id = $6, 
           stt_id = $7 
     WHERE atv_id = $1 RETURNING atv_id`;

const putAtividade = async (params) => {
    try {
        const { id, descricao, dataini, datafim, horasTrab, tarefa, status } = params;
        const result = await db.query(sql_put, [id, descricao, dataini, datafim, horasTrab, tarefa, status]);
        if (result.rows.length === 0) {
            throw new Error('Atividade não encontrada');
        }
        return { mensagem: 'Atividade atualizada com sucesso!' };
    } catch (err) {
        throw new Error(err.message);
    }
};

const sql_patch = `
    UPDATE t_atividade 
       SET `;

const patchAtividade = async (params) => {
    try {
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

        let sql = sql_patch + fields + ' WHERE atv_id = $1 RETURNING atv_id';
        const result = await db.query(sql, binds);
        if (result.rows.length === 0) {
            throw new Error('Atividade não encontrada');
        }
        return { mensagem: 'Atividade atualizada com sucesso!' };
    } catch (err) {
        throw new Error(err.message);
    }
};

const sql_delete = `
    DELETE FROM t_atividade 
     WHERE atv_id = $1 RETURNING atv_id`;

const deleteAtividade = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        if (result.rows.length === 0) {
            throw new Error('Atividade não encontrada');
        }
        return { mensagem: 'Atividade deletada com sucesso!' };
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports.getById = getById;
module.exports.postAtividade = postAtividade;
module.exports.putAtividade = putAtividade;
module.exports.patchAtividade = patchAtividade;
module.exports.deleteAtividade = deleteAtividade;
