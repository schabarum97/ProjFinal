-- Tabela para armazenar todos os status usados no sistema
CREATE TABLE T_STATUS (
    STT_ID SERIAL PRIMARY KEY, -- Chave PK
    STT_NOME VARCHAR(100),     -- Descrição do status
    STT_TABELA VARCHAR(1),     -- Identificação sobre qual tabela pode usar o status
    STT_DATAINI TIMESTAMP,     -- Vigencia inicial 
    STT_DATAFIM TIMESTAMP,     -- Vigencia final
    STT_COR VARCHAR(10)        -- Cor para a exibição no quadro
);
-- Tabela para armazenar todos os projetos
CREATE TABLE T_PROJETO (
    PRJ_ID SERIAL PRIMARY KEY, -- Chave PL
    PRJ_NOME VARCHAR(100) NOT NULL, -- Nome do projeto
    PRJ_DESCRICAO TEXT, -- Descrição detalhado do que se trata o projeto
    PRJ_DATAINI DATE,  -- Vigencia inicial do projeto
    PRJ_DATAFIM DATE,  -- Vigencia final do projeto
    STT_ID INT REFERENCES T_STATUS(STT_ID) -- Status do projeto
);

-- Tabela para armazenar todos os funcionários envolvidos em projetos sendo eles observadores, desenvolvedores solicitantes
CREATE TABLE T_FUNCIONARIO (
    FUN_ID SERIAL PRIMARY KEY,      -- Chave Pk
    FUN_NOME VARCHAR(100) NOT NULL, -- Nome funcionário
    FUN_FUNCAO VARCHAR(50),         -- Função do funcionário
    FUN_EMAIL VARCHAR(100),         -- Email funcionário
    FUN_TELEFONE VARCHAR(20),       -- Telefone
    FUN_CPF VARCHAR(20),            -- CPF/CNPJ funcionário
    FUN_STATUS VARCHAR(1)           -- Status do funcionário
);
-- Tabela para armazenar as tarefas
CREATE TABLE T_TAREFAS (
    TAR_ID SERIAL PRIMARY KEY,      -- Chave PK
    TAR_DESCRICAO TEXT NOT NULL,    -- Descrição da tarefa principal
    TAR_DATAINI DATE,               -- Vigencia inicial
    TAR_DATAFIM DATE,               -- Vigencia final
    TAR_HORASTRAB TIME,             -- Horas trabalhadas na tarefa
    STT_ID INT REFERENCES T_STATUS(STT_ID),  -- Status da tarefa
    FUN_ID INT REFERENCES T_FUNCIONARIO(FUN_ID),  -- Funcionário ligado a tarefa
    PRJ_ID INT REFERENCES T_PROJETO(PRJ_ID)  -- Projeto a qual a tarefa está ligada
);
-- Tarefas para armazenar todas as atividades ligadas a uma tarefa
CREATE TABLE T_ATIVIDADE (
    ATV_ID SERIAL PRIMARY KEY, -- Chave PK
    ATV_DESCRICAO TEXT, -- Descrição do que deve ser feito na atividade
    ATV_DATAINI TIMESTAMP, -- Vigencia inicial
    ATV_DATAFIM TIMESTAMP, -- Vigencia final
    ATV_HORASTRAB TIME,             -- Horas trabalhadas na ATIVIDADE
    TAR_ID INT REFERENCES T_TAREFAS(TAR_ID), -- Tarefa a qual a atividade está ligada
    STT_ID INT REFERENCES T_STATUS(STT_ID)  -- Status da atividade
);
--Tarefa para armazenar o login do sistemas
CREATE TABLE T_LOGIN (
    LOG_ID SERIAL PRIMARY KEY,     -- Chave PK
    LOG_NOME TEXT NOT NULL UNIQUE, -- Nome do user que está loganda
    LOG_SALT TEXT NOT NULL,        -- Salt da senha
    LOG_PASS TEXT NOT NULL         -- Senha criptografada
);
-- Tabela para relacionar as os projetos ligados ao funcionário e também os funcionários ligados aos projetos
CREATE TABLE L_PROJETO_FUNCIONARIO (
    PRJ_FUN_ID SERIAL PRIMARY KEY,     -- Chave PK
    PRJ_ID INT REFERENCES T_PROJETO(PRJ_ID), -- Chave do projeto
    TAR_ID INT REFERENCES T_TAREFAS(TAR_ID), -- Chave da tarefa
    STT_ID INT REFERENCES T_STATUS(STT_ID), -- Status
    CONSTRAINT FK_PROJETO_TAREFA  UNIQUE (PRJ_ID, TAR_ID)
);
-- Tabela para relacionar as atividades ligados ao funcionário e também os funcionários ligados aos atividades
CREATE TABLE L_FUNCIONARIO_ATIVIDADE (
    FUN_ATV_ID SERIAL PRIMARY KEY, -- Chave PK
    FUN_ID INT REFERENCES T_FUNCIONARIO(FUN_ID),
    ATV_ID INT REFERENCES T_ATIVIDADE(ATV_ID),
    STT_ID INT REFERENCES T_STATUS(STT_ID), -- Status
    CONSTRAINT FK_FUNCIONARIO_ATIVIDADE UNIQUE (FUN_ID, ATV_ID)
);
