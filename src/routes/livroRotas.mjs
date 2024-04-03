import express from "express";
import LivroControler from "../controles/livroControler.mjs";

const routes = express.Router();

routes.get('/livros', LivroControler.listarLivros);
routes.get('/livros/busca', LivroControler.listaLivrosPorEditora);
routes.get('/livros/:id', LivroControler.buscaLivroPorId);
routes.post('/livros', LivroControler.cadastrarLivro);
routes.put('/livros/:id', LivroControler.atualizarLivro);
routes.delete('/livros/:id', LivroControler.deletarLivro);

export default routes;