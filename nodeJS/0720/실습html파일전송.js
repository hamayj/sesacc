const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( async function(req,res){
    try {
        const data = await fs.readFile('./testhtml.html');
        res.writeHead(200);
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8000, function(){
    console.log("8000번 포트");
});

//ctrl + c 눌러야 터미널에서 빠져나옴...^&^