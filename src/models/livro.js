import mongoose from "mongoose";
import { autorSchema } from "./autor.mjs";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    editora: {type: String},
    preco: {type: Number},
    pagina: {type: Number},
    autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model('livros', livroSchema);

export default livro;

/*
const livroSchema = new mongoose.Schema({
 id: { type: mongoose.Schema.Types.ObjectId },
 titulo: { type: String, required: true },
 editora: { type: String },
 preco: { type: Number },
 paginas: { type: Number },
 autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
}, { versionKey: false });

valor de autor é o ID do tipo ObjectId que refencia à coleção autores
*/