var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/chatPrc2.html");
});

// 닉네임이 뭐랑 매칭되는지 서버가 확인해야 됨.
// list를 딕셔너리 형태로 쓰려고 배열을 만들어줬음.
var list = {};

io.on("connection", function(socket){
    console.log("connected: ", socket.id);
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        // socket의 id가 key가 되고 data.nickname이 value가 되는 것.

        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
    });
    // socket.emit("info", socket.id); info 안쓰니까 지워주고.
    // io.emit("notice", socket.id + "님이 입장하셨습니다.");
    socket.on("send", function(data){
        // data = { id:~~, msg:~~};
        console.log("client message : ", data.msg);
        data["nickname"] = list[socket.id];
        io.emit("newMessage", data);
        // 모든 사람에게 보여지게.
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
    });
});

http.listen( 8000, function(){
    console.log("server port : ", 8000);
});