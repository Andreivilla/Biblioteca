-- CreateTable
CREATE TABLE "tipo" (
    "id_tipo" SERIAL NOT NULL,
    "tempo" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_pkey" PRIMARY KEY ("id_tipo")
);

-- CreateTable
CREATE TABLE "bibliotecario" (
    "id_bibliotecario" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "bibliotecario_pkey" PRIMARY KEY ("id_bibliotecario")
);

-- CreateTable
CREATE TABLE "assistente" (
    "id_assistente" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "bibliotecarioId" INTEGER NOT NULL,

    CONSTRAINT "assistente_pkey" PRIMARY KEY ("id_assistente")
);

-- CreateTable
CREATE TABLE "livro" (
    "id_livro" SERIAL NOT NULL,
    "editora" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autores" TEXT NOT NULL,
    "capalivro" TEXT NOT NULL,
    "colecaoId" INTEGER,
    "itemEmprid" INTEGER,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id_livro")
);

-- CreateTable
CREATE TABLE "itemEmpr" (
    "numRenovacoes" INTEGER NOT NULL,
    "livroid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "colecao" (
    "id_colecao" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "colecao_pkey" PRIMARY KEY ("id_colecao")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "multas" INTEGER NOT NULL,
    "numLivros" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "idtipo" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "reserva" (
    "data_reserva" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "itemEmprId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "empresta" (
    "data_empr" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "itemEmprId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "itemEmpr_livroid_key" ON "itemEmpr"("livroid");

-- CreateIndex
CREATE UNIQUE INDEX "reserva_itemEmprId_data_reserva_key" ON "reserva"("itemEmprId", "data_reserva");

-- CreateIndex
CREATE UNIQUE INDEX "empresta_itemEmprId_data_empr_key" ON "empresta"("itemEmprId", "data_empr");

-- AddForeignKey
ALTER TABLE "assistente" ADD CONSTRAINT "assistente_bibliotecarioId_fkey" FOREIGN KEY ("bibliotecarioId") REFERENCES "bibliotecario"("id_bibliotecario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livro" ADD CONSTRAINT "livro_itemEmprid_fkey" FOREIGN KEY ("itemEmprid") REFERENCES "itemEmpr"("livroid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "livro" ADD CONSTRAINT "livro_colecaoId_fkey" FOREIGN KEY ("colecaoId") REFERENCES "colecao"("id_colecao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_idtipo_fkey" FOREIGN KEY ("idtipo") REFERENCES "tipo"("id_tipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_itemEmprId_fkey" FOREIGN KEY ("itemEmprId") REFERENCES "itemEmpr"("livroid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresta" ADD CONSTRAINT "empresta_itemEmprId_fkey" FOREIGN KEY ("itemEmprId") REFERENCES "itemEmpr"("livroid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresta" ADD CONSTRAINT "empresta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
