function call(name){
    return new Promise ( function (resolve, reject){
        setTimeout( function(){
            console.log(name);
            resolve(name);
        }, 1000 );
    });
}    
    
function back(){
    return new Promise (function (resolve, reject){
       setTimeout( function() {
        console.log( "back" );
        resolve( "back" );
    }, 1000 ); 
    })
}

function hell( ){
    return new Promise (function (resolve, reject){
        setTimeout( function() {
        resolve( "callback hell" );
    }, 1000 );
    })
}

async function exec(){
    let name = await call("hama");
    console.log( name + "반가워" );
    let back1 = await back();
    console.log( back1 + "을 실행했구나" );
    let hell1 = await hell();
    console.log( "여기는 " + hell1 );
}


exec();

// 세령님 도움으로 완성. ^~^👍