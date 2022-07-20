function login(id, pw) {
    return new Promise (function (resolve, reject){
        setTimeout( function(){
            console.log("사용자 입장");
            resolve(id);

        },3000);
    })
}

function getVideo(id) {
    return new Promise ( function ( resolve, reject ){
        setTimeout( function() {
            resolve(['아이언맨1', '아이언맨2']);
        },2000);
    });
}

function getDetail(video) {
    return new Promise ( function (resolve, reject){
        setTimeout(function() {
            resolve("비디오 제목은 : " + video);
        });
    });
}

function exec(){
    login ( 'kim, 1234')
    .then( function(user){
        console.log('user님 환영');
        return getVideo(user);
    })
    .then( function(videos){
        console.log(videos);
        return getDetail( videos[0] );
    })
    .then(function(title){
        console.log(title);
    });
}

async function exec(){
    let user = await login('kim', '1234');
    // 실행하고 실행의 결과값을 기다림. 프로미스가 실행할 때까지 기다리고, 
    // 그 후에 다음을 실행함. 
    console.log('user님 환영');
    let videos = await getVideo(user);
    console.log( videos );
    let title = await getDetail(videos[0]);
    console.log( title );
}

// 디비 연결할 때 넘어오는 형태가 프라미스이니까 그 때 async, await를 이용해서 동기 처리 해줄 수 있음.
// ...^^ 이해를 못했으니까 공부를 하자 공부를~~~~