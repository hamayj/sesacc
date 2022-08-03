// exports.get_user = (req, res) => {
//     res.send("Get User");
// }
// // 함수를 짤 때부터 내보낼 함수라고 정의할 수 있음.

// // 모듈 내보내는 두가지 방법
// // 1) modules.exports 2) 

// exports.a = (req,res) => {
    
// }

// 뷰를 보여주는 공간은 컨트롤러에서 진행할거샤

// 함수 적고 있어요.

const User = require("../model/User");
// 왜냐면 컨트롤러는 모델하고도 소통해야되거든... 디비 갖다주고해야돼서.

exports.index = (req, res) => {
    res.render("index");
}
exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send( req.body );
} 
// 여기서 받아온 데이터가 처리가 돼야 함. 근데 직접적인 데이터를.. 접근하는건 모델만!
// 컨트롤러는 데이터를 가공만 함. 


exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) =>  {
    var data = await User.get_user(); 
    // 얘가 안기다려주니까 await처리해서 기다릴 수 있게 해줘야 함. 
    var info = data.split("//"); 
    // split("//") //기준으로 나누고 배열로 담음. 

    if ( info[0] != req.body.id ){
        res.send("id 다름!");
    } else if ( info[1] != req.body.pw) {
        res.send("pw 다름!");
    } else {
        res.send("로그인 성공!")
    }
    console.log(data);
    // 로그인을 한다는 것은 데이터 처리가 필요해... 컨트롤러가 아닌 모델에서 처리를 해야 함. 
    // 컨트롤러는 데이터를 읽을 수가 없어. 
}