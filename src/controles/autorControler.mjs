import { autor } from "../models/autor.mjs";

class autorControler {

    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao buscar e listar os livros do Banco de Dados.`
            });
        }
    };

    static async buscaAutorPorId(req, res) {
        try {
            const idAutor = req.params.id;
            const autorBuscado = await autor.findById(idAutor);
            res.status(200).json(autorBuscado);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao buscar e listar o livro no Banco de Dados.`
            });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor Criado com sucesso",
                autor: novoAutor
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar livro`
            });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const idAutor = req.params.id;
            await autor.findByIdAndUpdate(idAutor, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao atualizar o livro no Banco de Dados.`
            });
        }
    }

    static async deletarAutor(req, res){
        try {
            const idAutor = req.params.id;
            await autor.findByIdAndDelete(idAutor);
            res.status(200).json({message: "Livro Deletado com sucesso"});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao deletar o livro no Banco de Dados.`
            });
        }
    }

};

export default autorControler;