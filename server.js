const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json())

let herois = []
let viloes = []

app.post('/cadastrar-heroi', (req, res) =>{
    const novoHeroi = req.body
    herois.push(novoHeroi)
    res.json(herois)
})
app.post('/cadastrar-vilao', (req, res) =>{
    const novoVilao = req.body;
    viloes.push(novoVilao);
    res.json(viloes)
})
app.post('/batalhar/:idHeroi/:idVilao', (req, res) =>{
    const idHeroi = Number(req.params.idHeroi); 
    const idVilao = Number(req.params.idVilao);
    let recebeHeroi = herois.find((heroi) => heroi.id == idHeroi);
    let recebeVilao = viloes.find((vilao) => vilao.id == idVilao);
    console.log(recebeHeroi)
    console.log(recebeVilao);
    if(recebeHeroi.pontosDePoder > recebeVilao.pontosDePoder){
        res.json(`Batalha: ${recebeHeroi.nome} venceu ${recebeVilao.nome}`)

    }else if(recebeVilao.pontosDePoder > recebeHeroi.pontosDePoder){
        res.json(`Batalha: ${recebeVilao.nome} venceu ${recebeHeroi.nome}`)
    }else{
        res.json("Empatou!!!")
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando ${port}`)
})
