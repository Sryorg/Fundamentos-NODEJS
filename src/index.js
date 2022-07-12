const express = require("express");

const app = express();

// middleware
app.use(express.json());

/**
 * GET - Buscar uma informação
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação
 */


/**
 * Tipos de parâmetros
 * 
 *  Route Params => Identifica um recurso para editar/deletar/buscar
 *  Query Params => Paginação / Filtro
 *  Body Params => Objetos para inserção/alteração (JSON)
 */

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["curso1", "curso2", "curso3"])
})

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json(["curso1", "curso2", "curso3", "curso4"]);
})

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);

  return response.json(["curso1", "curso8", "curso3", "curso4"])
})

app.patch("/courses/:id", (request, response) => {
  return response.json(["curso1", "curso8", "curso3", "curso10"])
})

app.delete("/courses/:id", (request, response) => {
  return response.json(["curso8", "curso3", "curso10"])
})

app.listen(3333)