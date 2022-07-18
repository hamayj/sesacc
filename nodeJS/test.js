function a( name ){
    console.log( name + "a" );
}
function b(text, cb) {
    cb(text + "bb");
}
function login( id, aaa ){
    aaa( id + "login");
}                         

login("kim", 
    a 
);