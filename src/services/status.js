const db = require('../configs/pg');

const sql_get = `
    SELECT t_status.stt_id, 
           t_status.stt_nome,
           t_status.stt_tabela,
           t_status.stt_dataini,
           t_status.stt_datafim,
           t_status.stt_cor
      FROM t_status
     WHERE t_status.stt_id = $1`;

const getById = async (id) => {
    try {
        const ret = await db.query(sql_get, [id]);
        if (ret.rows.length === 0) {
            throw new Error('Status não encontrado');
        }
        return { total: ret.rows.length, status: ret.rows };
    } catch (err) {
        throw err;
    }
};

const sql_get_table = `
    SELECT t_status.stt_id, 
           t_status.stt_nome,
           t_status.stt_tabela,
           t_status.stt_dataini,
           t_status.stt_datafim,
           t_status.stt_cor
      FROM t_status
     WHERE t_status.stt_tabela = $1`;

const getByTable = async (table) => {
    try {
        const ret = await db.query(sql_get_table, [table]);
        if (ret.rows.length === 0) {
            throw new Error('Status não encontrado');
        }
        return { total: ret.rows.length, status: ret.rows };
    } catch (err) {
        throw err;
    }
};

const sql_post = `
    INSERT INTO t_status 
            (stt_nome, stt_tabela, stt_dataini, stt_datafim, stt_cor)
     VALUES ($1, $2, $3, $4, $5)`;

const postStatus = async (params) => {
    try {
        const { nome, tabela, dataini, datafim, cor } = params;
        await db.query(sql_post, [nome, tabela, dataini, datafim, cor]);
    } catch (err) {
        throw err;
    }
};

const sql_put = `
    UPDATE t_status
       SET stt_nome = $2,
           stt_tabela = $3,
           stt_dataini = $4,
           stt_datafim = $5,
           stt_cor = $6
     WHERE stt_id = $1`;

const putStatus = async (params) => {
    try {
        const { id, nome, tabela, dataini, datafim, cor } = params;
        const ret = await db.query(sql_put, [id, nome, tabela, dataini, datafim, cor]);
        if (ret.rowCount === 0) {
            throw new Error('Status não encontrado');
        }
    } catch (err) {
        throw err;
    }
};

const sql_patch = `
    UPDATE t_status 
       SET `;

const patchStatus = async (params) => {
    try {
        let fields = '';
        let binds = [];
        binds.push(params.id);
        let countParams = 1;
        if (params.nome) {
            countParams++;
            fields += ` stt_nome = $${countParams} `;
            binds.push(params.nome);
        }
        if (params.tabela) {
            countParams++;
            fields += (fields ? ',' : '') + ` stt_tabela = $${countParams} `;
            binds.push(params.tabela);
        }
        if (params.dataini) {
            countParams++;
            fields += (fields ? ',' : '') + ` stt_dataini = $${countParams} `;
            binds.push(params.dataini);
        }
        if (params.datafim) {
            countParams++;
            fields += (fields ? ',' : '') + ` stt_datafim = $${countParams} `;
            binds.push(params.datafim);
        }
        if (params.cor) {
            countParams++;
            fields += (fields ? ',' : '') + ` stt_cor = $${countParams} `;
            binds.push(params.cor);
        }
        let sql = sql_patch + fields + ' WHERE stt_id = $1';
        const ret = await db.query(sql, binds);
        if (ret.rowCount === 0) {
            throw new Error('Status não encontrado');
        }
    } catch (err) {
        throw err;
    }
};

const sql_delete = `
    DELETE FROM t_status
     WHERE stt_id = $1`;

const deleteStatus = async (params) => {
    try {
        const { id } = params;
        const ret = await db.query(sql_delete, [id]);
        if (ret.rowCount === 0) {
            throw new Error('Status não encontrado');
        }
    } catch (err) {
        throw err;
    }
};

module.exports.getById = getById;
module.exports.getByTable = getByTable;
module.exports.postStatus = postStatus;
module.exports.putStatus = putStatus;
module.exports.patchStatus = patchStatus;
module.exports.deleteStatus = deleteStatus;
