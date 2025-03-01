const { herois, viloes } = require("../models/personagem");

exports.postH = (req, res) => {
    const novoHeroi = req.body;
    herois.push(novoHeroi);
    res.status(200).send({ mensagem: "Heroi cadastrado com sucesso" });
}

exports.postV = (req, res) => {
    const novoVilao = req.body;
    viloes.push(novoVilao);
    res.status(200).send({ mensagem: "Vilao cadastrado com sucesso" });
}


exports.postB = (req, res) => {
    const idHeroi = req.params.id;
    const idVilao = req.params.id;

    console.log("IDs recebidos:", idHeroi, idVilao); 

    let recebeHeroi = herois.find((heroi) => String(heroi.id) === String(idHeroi));
    let recebeVilao = viloes.find((vilao) => String(vilao.id) === String(idVilao));

    console.log("Herói encontrado:", recebeHeroi); 
    console.log("Vilão encontrado:", recebeVilao);

    if (!recebeHeroi || !recebeVilao) {
        return res.status(404).send({ mensagem: "Herói ou Vilão não encontrado" });
    }

    if (recebeHeroi.pontosDePoder > recebeVilao.pontosDePoder) {
        return res.status(200).send({ Batalha: `${recebeHeroi.nome} venceu ${recebeVilao.nome}` });
    } else if (recebeHeroi.pontosDePoder < recebeVilao.pontosDePoder) {
        return res.status(200).send({ Batalha: `${recebeVilao.nome} venceu ${recebeHeroi.nome}` });
    } else {
        return res.status(200).send({ Batalha: "Empate" });
    }
};


exports.get = (req, res) => {
    res.status(200).send({Personagens: herois , viloes})
}

