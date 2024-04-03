import express from "express"
import livros from "./livroRotas.mjs"
import autor from "./autorRotas.mjs"

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Curso de node.JS'));
    app.use(express.json(), livros);
    app.use(express.json(), autor);
};

export default routes;