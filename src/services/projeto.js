const db = require('../configs/pg');

const sql_get = `
    SELECT prj_id, prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id
    FROM t_projeto
    WHERE prj_id = $1`;

const getById = async (id) => {
    const result = await db.query(sql_get, [id]);
    if (result.rows.length === 0) {
        throw new Error('Projeto não encontrado');
    }
    return { total: result.rows.length, projeto: result.rows };
};

const sql_post = `
    INSERT INTO t_projeto (prj_nome, prj_descricao, prj_dataini, prj_datafim, stt_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING prj_id`;

const postProjeto = async (params) => {
    const { nome, descricao, dataini, datafim, status } = params;
    const result = await db.query(sql_post, [nome, descricao, dataini, datafim, status]);
    return { mensagem: 'Projeto criado com sucesso!', id: result.rows[0].prj_id };
};

const sql_put = `
    UPDATE t_projeto
    SET prj_nome = $2, prj_descricao = $3, prj_dataini = $4, prj_datafim = $5, stt_id = $6
    WHERE prj_id = $1`;

const putProjeto = async (params) => {
    const { id, nome, descricao, dataini, datafim, status } = params;
    const result = await db.query(sql_put, [id, nome, descricao, dataini, datafim, status]);
    if (result.rowCount === 0) {
        throw new Error('Projeto não encontrado');
    }
    return { mensagem: 'Projeto atualizado com sucesso!' };
};

const sql_patch = `UPDATE t_projeto SET `;

const patchProjeto = async (params) => {
    let fields = '';
    let binds = [params.id];
    let countParams = 1;

    if (params.nome) {
        countParams++;
        fields += ` prj_nome = $${countParams} `;
        binds.push(params.nome);
    }
    if (params.descricao) {
        countParams++;
        fields += (fields ? ',' : '') + ` prj_descricao = $${countParams} `;
        binds.push(params.descricao);
    }
    if (params.dataini) {
        countParams++;
        fields += (fields ? ',' : '') + ` prj_dataini = $${countParams} `;
        binds.push(params.dataini);
    }
    if (params.datafim) {
        countParams++;
        fields += (fields ? ',' : '') + ` prj_datafim = $${countParams} `;
        binds.push(params.datafim);
    }
    if (params.status) {
        countParams++;
        fields += (fields ? ',' : '') + ` stt_id = $${countParams} `;
        binds.push(params.status);
    }

    const sql = sql_patch + fields + ' WHERE prj_id = $1 ';
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
        throw new Error('Projeto não encontrado');
    }
    return { mensagem: 'Projeto atualizado com sucesso!' };
};

const sql_delete = `
    DELETE FROM t_projeto
    WHERE prj_id = $1`;

const deleteProjeto = async (params) => {
    const { id } = params;
    const result = await db.query(sql_delete, [id]);
    if (result.rowCount === 0) {
        throw new Error('Projeto não encontrado');
    }
    return { mensagem: 'Projeto deletado com sucesso!' };
};

module.exports.getById = getById;
module.exports.postProjeto = postProjeto;
module.exports.putProjeto = putProjeto;
module.exports.patchProjeto = patchProjeto;
module.exports.deleteProjeto = deleteProjeto;

