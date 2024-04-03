import express from "express";
import autorControler from "../controles/autorControler.mjs";

const routes = express.Router();

routes.get('/autor', autorControler.listarAutores);
routes.get('/autor/:id', autorControler.buscaAutorPorId);
routes.post('/autor', autorControler.cadastrarAutor);
routes.put('/autor/:id', autorControler.atualizarAutor);
routes.delete('/autor/:id', autorControler.deletarAutor);

export default routes;