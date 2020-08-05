import express from "express";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ messege: "Hello World"});
});

app.listen(3333);

//GET: Buscar ou listar uma informação.
//POST: Criar alguma nova informação.
//PUT: Atualizar uma informação existente.
//DELETE: Deletar uma informação já existente.

// Corpo (Request body): Dados para criação ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar ou deletar.
// Query Params: Paginação,filtros, ordenação.