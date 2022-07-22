const express = require('express');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');

//app.use( express.static('public'));
// 정적 파일을 관리하는 것. 경로로 안쓸 것들을 어디에 있는지 미리 정의를 해놓는 것.
// 퍼블릭을 정적파일을 놓는 곳으로 정의하는 것.
app.use('/g', express.static('public'));
// 인자를 두개로 만들어 줌.
// /abc/aa로 가상 경로를 만들어준것 (abc가 public을 대신하는 것. )
// 정적파일을 어떤 경로를 통해서 찾을 수 있는지 정의를 해둠.


app.get('/', (req,res) => {
    res.render("애벌레");
});
//render 파일을 부르는거. ejs를 쓰기 때문에 ejs라는걸 이미 알고 있어.


// app.get('/a', (req,res) => {
//     res.send('Hello Express!');
// }); 

// 내용을 응답을 적어서 보낸거. 
// '/'가 경로야. express는 경롤를 지정해줄 수 있음.
// 원래 http??에서는 if문으로 경로를 지정해줘야 됨..(?)
// get으로 slash 경로를 쓰는 것.


app.listen(port, () => {
    console.log('Server port : ', port);
})

// package.json이 있는 폴더 내에서 해야됨.
