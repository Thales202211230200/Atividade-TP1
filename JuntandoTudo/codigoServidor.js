const port = 8080;
var cont = 0


const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/conta", (request, response) => {
    const data = {
        n1: request.query.n1,
        n2: request.query.n2,
        operacao: request.query.operacao
    }

    if (data.operacao == '+') {
        data.resultado = parseFloat(data.n1) + parseFloat(data.n2)
        response.send(`${data.n1}+${data.n2}=${data.resultado}`
            
        );
    }
    if (data.operacao == '-') {
        data.resultado = parseFloat(data.n1) - parseFloat(data.n2)
        response.send(`${data.n1}-${data.n2}=${data.resultado}`
           
        );
    }
    if (data.operacao == '*') {
        data.resultado = parseFloat(data.n1) * parseFloat(data.n2)
        response.send(`${data.n1}*${data.n2}=${data.resultado}`
            
        );
    }
    if (data.operacao == '/') {
        data.resultado = parseFloat(data.n1) / parseFloat(data.n2)
        response.send(`${data.n1}/${data.n2}=${data.resultado}`
            
        );
    }
    else{
        response.send(`Resultado inválido`
            
        );
    }
    
});

app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});