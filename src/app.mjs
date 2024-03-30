import express from "express";

const app = express();
app.use(express.json())

const LIVROS = [
    {
        "id": 1,
        "nome": 'O Senhor dos Anéis'
    },
    {
        "id": 2,
        "nome": 'Eu sou a lenda'
    }
]

app.get('/', (req, res) => {
    res.status(200).send("Iniciado servidor NodeJs do curso API com node e express da ALura!!!");
});

app.get('/livros', (req, res) => {
    res.status(200).json(LIVROS);
})

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(LIVROS[index]);
})

app.post('/livros', (req, res) => {
    console.log(req.body);
    LIVROS.push(req.body);
    res.status(201).json(LIVROS);
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    LIVROS[index].nome = req.body.nome;
    res.status(201).json(LIVROS);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    LIVROS.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!!!")
})

function buscaLivro(id) {
    let index = LIVROS.findIndex(livro => {
        return livro.id === Number(id);
    });
    return index
}



export default app;