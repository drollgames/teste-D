var app = require('http').createServer(resposta);
app.listen(3000);
console.log("Aplicação está em execução...");
function resposta (req, res) {
     res.writeHead(200);
     res.end("Ola, o servidor esta funcionando corretamente.");
}
