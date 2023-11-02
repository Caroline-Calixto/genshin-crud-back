const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require('./database/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("api rodando");
});

// consulta de todos os personagens
app.get("/personagens", (req, resp) => {
    resp.statusCode = 200;
    resp.json(database.personagens)
});

// consultando detalhes do personagem
app.get("/personagens/:nome", (req, resp) => {
    const nomePersonagem = req.params.nome;

    const personagemSelecionado = database.personagens.find(personagem => {
        return personagem.nome === nomePersonagem;
    });

    if (personagemSelecionado) {
        resp.statusCode = 200;
        resp.json({
            nome: personagemSelecionado.nome,
            conjunto: personagemSelecionado.conjunto,
            ampulheta: personagemSelecionado.ampulheta,
            calice: personagemSelecionado.calice,
            coroa: personagemSelecionado.coroa,
            subStatus: personagemSelecionado["subStatus"]
        });
    } else {
        resp.statusCode = 404;
        resp.json({ mensagem: "Personagem não encontrado" });
    }
});

// consultando personagem por conjunto
app.get('/personagens/conjunto/:conjunto', (req, res) => {
    const conjuntoSelecionado = req.params.conjunto;
  
    const personagensFiltrados = database.personagens.filter(personagem => personagem.conjunto === conjuntoSelecionado);
  
    res.json(personagensFiltrados);
  });