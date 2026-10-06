-- Baseline da tabela existente alunos.
-- Esta migration representa a estrutura inicial do banco existente.
-- Como a tabela já existe, marque esta migration como aplicada com:
-- npx prisma migrate resolve --applied 0_init

CREATE TABLE `alunos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `curso` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
