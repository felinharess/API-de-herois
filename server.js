const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const personagemRoutes = require("./routes/personagem");

app.use('/personagem', personagemRoutes)


app.listen(port, () => {
    console.log(`Servidor rodando ${port}`)
})
