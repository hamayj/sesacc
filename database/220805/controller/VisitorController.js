const Visitor = require("../model/Visitor");
const visitorRouter = require("../routes");
// 왜냐면 컨트롤러는 모델하고도 소통해야되거든... 디비 갖다주고해야돼서.

exports.index = (req, res) => {
    res.render("index");
}

// 왜 이름을 같게 해서 헷갈리게 해 ㅡㅡ 
exports.get_visitors = async(req, res) => {
    Visitor.get_visitors(function(result){
        console.log('result: ', result );
        console.log('index');
        res.render("index", { data : result });
    });
}

exports.post_comment = (req, res) => {
    console.log( req.body );

    Visitor.insert( req.body.name, req.body.comment, function( result){
        console.log(result);
        res.send( { id: result });
    });
    
}