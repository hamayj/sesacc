function call(name, cb ){
    return new Promise (function (resolve, reject) {
        setTimeout( function(){
        console.log( name );
        resolve(name);
    }, 1000 ); // 초를 기다렸다 함수 실행. 
    // 콜백 함수는 이어질 함수를 넣는것 (??)
})
}


function back( cb ){
    return new Promise ( function ( resolve, reject ){
    setTimeout( function() {
        console.log( "back" );
        cb( "back" );
    }, 1000 );
}
function hell( cb ){
    setTimeout( function() {
        cb( "callback hell" );
    }, 1000 );
}
call( 'kim', function( name ){
    console.log( name + "반가워" );
    back( function(txt) {
        console.log( txt + "을 실행했구나" );
        hell( function( message ){
            console.log( "여기는 " + message );
        } );
    });
});