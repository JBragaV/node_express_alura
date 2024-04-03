import express from "express";
import conectaNaDataBase from "./config/dbConnect.mjs";
import routes from "./routes/index.js";
import meuMiddle from "./middleware.mjs";

const conn = await conectaNaDataBase();
const app = express();
routes(app);
conn.on('error', (erro)=>{
    console.erro("Erro na conexão com BD\n", erro);
})

conn.once('open', () => console.log("Bando de dados conectado com a aplicação"));


export default app;