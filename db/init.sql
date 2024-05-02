CREATE TABLE T_STATUS (
    STT_ID SERIAL PRIMARY KEY, -- Chave PK
    STT_NOME VARCHAR(100),     -- Descrição do status
    STT_TABELA VARCHAR(1),     -- Identificação sobre qual tabela pode usar o status
    STT_DATAINI TIMESTAMP,     -- Vigencia inicial 
    STT_DATAFIM TIMESTAMP,     -- Vigencia final
    STT_COR VARCHAR(10)        -- Cor para a exibição no quadro
);

CREATE TABLE T_PROJETO (
    PRJ_ID SERIAL PRIMARY KEY, -- Chave PL
    PRJ_NOME VARCHAR(100) NOT NULL, -- Nome do projeto
    PRJ_DESCRICAO TEXT, -- Descrição detalhado do que se trata o projeto
    PRJ_DATAINI DATE,  -- Vigencia inicial do projeto
    PRJ_DATAFIM DATE,  -- Vigencia final do projeto
    STT_ID INT REFERENCES T_STATUS(STT_ID) -- Status do projeto
);

CREATE TABLE T_FUNCIONARIO (
    FUN_ID SERIAL PRIMARY KEY,      -- Chave Pk
    FUN_NOME VARCHAR(100) NOT NULL, -- Nome funcionário
    FUN_FUNCAO VARCHAR(50),         -- Função do funcionário
    FUN_EMAIL VARCHAR(100),         -- Email funcionário
    FUN_TELEFONE VARCHAR(20),       -- Telefone
    FUN_CPF VARCHAR(20),            -- CPF/CNPJ funcionário
    FUN_STATUS VARCHAR(1)           -- Status do funcionário
);

CREATE TABLE T_TAREFAS (
    TAR_ID SERIAL PRIMARY KEY,      -- Chave PK
    TAR_DESCRICAO TEXT NOT NULL,    -- Descrição da tarefa principal
    TAR_DATAINI DATE,               -- Vigencia inicial
    TAR_DATAFIM DATE,               -- Vigencia final
    STT_ID INT REFERENCES T_STATUS(STT_ID),  -- Status da tarefa
    FUN_ID INT REFERENCES T_FUNCIONARIO(FUN_ID),  -- Funcionário ligado a tarefa
    PRJ_ID INT REFERENCES T_PROJETO(PRJ_ID)  -- Projeto a qual a tarefa está ligada
);

CREATE TABLE T_ATIVIDADE (
    ATV_ID SERIAL PRIMARY KEY, -- Chave PK
    ATV_DESCRICAO TEXT, -- Descrição do que deve ser feito na atividade
    ATV_DATAINI TIMESTAMP, -- Vigencia inicial
    ATV_DATAFIM TIMESTAMP, -- Vigencia final
    TAR_ID INT REFERENCES T_TAREFAS(TAR_ID), -- Tarefa a qual a atividade está ligada
    STT_ID INT REFERENCES T_STATUS(STT_ID)  -- Status da atividade
);

CREATE TABLE T_LOGIN (
    LOG_ID SERIAL PRIMARY KEY,     -- Chave PK
    LOG_NOME TEXT NOT NULL UNIQUE, -- Nome do user que está loganda
    LOG_SALT TEXT NOT NULL,        -- Salt da senha
    LOG_PASS TEXT NOT NULL         -- Senha criptografada
);

CREATE TABLE L_PROJETO_TAREFA (
    PRJ_TAREFA_ID SERIAL PRIMARY KEY,     -- Chave PK
    PRJ_ID INT REFERENCES T_PROJETO(PRJ_ID), -- Chave do projeto
    TAR_ID INT REFERENCES T_TAREFAS(TAR_ID), -- Chave da tarefa
    DATA_CRIACAO DATE, -- Data que foi criada
    HORAS_DEDICADAS INT, -- Horas usadas na tarefa
    PRIORIDADE INT, -- Prioridade
    STT_ID INT REFERENCES T_STATUS(STT_ID), -- Status
    CONSTRAINT FK_PROJETO_TAREFA  UNIQUE (PRJ_ID, TAR_ID)
);

CREATE TABLE L_FUNCIONARIO_ATIVIDADE (
    FUN_ATV_ID SERIAL PRIMARY KEY, -- Chave PK
    FUN_ID INT REFERENCES T_FUNCIONARIO(FUN_ID),
    ATV_ID INT REFERENCES T_ATIVIDADE(ATV_ID),
    HORAS_DEDICADAS INT, -- Horas usadas na tarefa
    DATA_CRIACAO DATE, -- Data que foi criada
    PRIORIDADE INT, -- Prioridade
    STT_ID INT REFERENCES T_STATUS(STT_ID), -- Status
    CONSTRAINT FK_FUNCIONARIO_ATIVIDADE UNIQUE (FUN_ID, ATV_ID)
);
