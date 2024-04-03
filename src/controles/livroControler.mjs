import { autor } from "../models/autor.mjs";
import livro from "../models/livro.js";

class LivroControler {

    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao buscar e listar os livros do Banco de Dados.`
            });
        }

        /*
        try {
            const listaLivros = await livro.find({}).populate("autor").exec();
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
        */
    };

    static async buscaLivroPorId(req, res) {
        try {
            const idLivro = req.params.id;
            const livroBuscado = await livro.findById(idLivro);
            res.status(200).json(livroBuscado);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao buscar e listar o livro no Banco de Dados.`
            });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            console.log(autorEncontrado);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "Livro Criado com sucesso",
                livro: livroCriado
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar livro`
            });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const idLivro = req.params.id;
            await livro.findByIdAndUpdate(idLivro, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao atualizar o livro no Banco de Dados.`
            });
        }
    }

    static async deletarLivro(req, res){
        try {
            const idLivro = req.params.id;
            await livro.findByIdAndDelete(idLivro);
            res.status(200).json({message: "Livro Deletado com sucesso"});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao deletar o livro no Banco de Dados.`
            });
        }
    }

    static async listaLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora });
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao buscar os livro por editora no Banco de Dados.`
            });
        }
    }

};

export default LivroControler;