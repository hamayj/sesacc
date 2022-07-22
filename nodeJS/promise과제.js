function call(name){
    return new Promise (function (resolve, reject) {
        setTimeout( function(){
        console.log( name );
        resolve(name);
    }, 1000 ); // 초를 기다렸다 함수 실행. 
    // 콜백 함수는 이어질 함수를 넣는것 (??)
})
}


function back( ){
    return new Promise ( function ( resolve, reject ){
    setTimeout( function() {
        console.log( "back" );
        resolve( "back" );
        }, 1000 );
    });
}

function hell( ){
    return new Promise ( function (
        resolve, reject) {
        setTimeout( function() {
        resolve( "callback hell" );
    }, 1000 );
        }
    );
}


async function exec(){
    let name = await call ()
}

    