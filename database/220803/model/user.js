const exp = require("constants");
const { resolve } = require("path");

const fs = require("fs").promises;

exports.post_user = function( data ) {
    console.log( data ); // 파일을 쓸려면 정보가 있어야 되니까... 정보를 컨트롤러가 줄거샤..
    const { id, pw, name, age } = data;
    // let user_info = data.id + "//" + data.pw + "//" + data.name + "//" + data.age;
    //fs.writeFile("./model/info.txt", `${id}//${pw}//${name}//${age}`); // 
    fs.appendFile("./model/info.txt", `${id}//${pw}//${name}//${age}\n`)
    .catch ( (err) => {
        fs.writeFile("./model/info.txt", `${id}//${pw}//${name}//${age}`);
    }); 
} 
// fs.writeFile("./model/info.txt", user_info);

exports.get_user = async function () {
    var buffer = await fs.readFile("./info.txt"); // then처럼 만들었음...^~^..? promise니까... 
    // then -> resolve
    // await 으로 처리하면 앞 값으로 넣어줌. 
    return buffer.toString();
    // 처음 읽어오는건 버퍼였어.
}   // fs를 promise 방식으로 읽어왔으니까 async, await 

// 데이터가 저장되는 함수를 컨트롤러에서 갖다씀!