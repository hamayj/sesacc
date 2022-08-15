const User = require("../model/User");
const userRouter = require("../routes");
const UserRouter = require("../routes");
// 왜냐면 컨트롤러는 모델하고도 소통해야되거든... 디비 갖다주고해야돼서.

exports.index = (req, res) => {
    res.render("index");
    // 요렇게만 썼을 때는 index 화면으로 바로 안떴음...
    // 라우터랑 연결하니까 됐음.
}

// 이전 실습에서 코드 가져옴.
exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
} 
// 좀 이상하게 한 거 같긴 한데 ㅡㅡ... 어쨋거나..

// 이렇게 render만 해서 띄워주면 안돼.
// exports.login = (req, res) => {
//     res.render("login");
// }

// exports.post_login = 

// update와 delete는 오늘 한 코드에서 갖고 오자.

// 회원가입
exports.post_user = (req, res) => {
    User.insert(req.body.id, req.body.pw, req.body.name, function(result){
        console.log(result);
        res.send(true);// axios에서 기다리니까 그냥 보내주는거.
    });
}

// 로그인
exports.login = (req, res) => {
    console.log(req.body);
    User.login(req.body.id, req.body.pw, function(result){
        console.log(result[0]);
        if (result.length == 0) {
            res.redirect("/user");
            // alert("login 실패🧑‍🎤"); // 동적 폼 아니라서 alert 실행 안됨.
        } else {
            res.render("login", {result: result[0]});
        }
        // res.render(result[0].name); axios에 연결할 때 이렇게.
        // if(req.body.id != )로 할 필요없음.  sql에서 select로 검사해서 보낼거임.
    });
}



exports.patch_comment = (req, res) => {
    User.update( req.body, function( result ){
        console.log( result );
        res.send ( "수정성공!" );
    });
} 

// exports.update = (req, res) => {
//     User.update(req.body, function(result){
//         console.log(result);
//         res.send("수정성공!");
//     })
// }

// exports.delete_user = (req, res) => {
//     User.delete( req.body.id, function(result){
//         console.log(result);
//         res.send("회원 정보가 삭제되었습니다. 🧑‍🎤");
//     })
// }