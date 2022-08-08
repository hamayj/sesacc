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

exports.get_visitor = (req, res) => {
    // 이 함수는 모델을 실행시킬거임. 하단부 아직 정의되진 않았음.
    // 이거는 업데이트 아니고 셀렉트 다시 해보는거.
    // 컨트롤러에서 id를 모델로 보내줘야 함. (검색을 하고자하는 아이디값. req.query.id)
    Visitor.get_visitor( req.query.id, function(result){
        console.log("result :", result);
        console.log("result[0]: ", result[0]);
        res.send( { result: result[0] } ); // 0번째 인덱스의 값만 넘어가라.
    })
}

exports.patch_comment = (req,res) => {
    Visitor.update( req.body, function( result ){
        console.log( result );
        res.send ( "수정성공!" );
    });
} 

exports.delete_comment = (req, res) => {
    Visitor.delete( req.body.id, function(result){
        // req.body.id가 axios에서 보내준 data ->  id
        console.log(result);
        res.send("삭제성공"); // send로 클라한테 삭제성공을 보내고 있음. 
    });
}

