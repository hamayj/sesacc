const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost', //127.0.0.1
    user: 'user',
    password: 'SeSAC4web!',
    database: 'user'
}); // 처음 디비와 연결할 때 어떤 디비에 연결할지 정해야됨.
// 하나의 디비만 연결이 가능함.
// 여기까지가 연결 준비된 상태.

exports.insert = ( id, pw, name, cb ) => {
    var sql = "insert into user(id, pw, name) values( '" + id +"', '" + pw + "', '" + name + "')";
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb(rows);
    })
}

exports.login = (id, pw, cb) => {
    var sql = "select * from user where id = '" + id + "' and pw = '" + pw + "'";
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);ㄴㄴ
        // rows에 내가 원하는 데이터가 들어갔음.
    });
}

exports.update = (data, cb) => {
    let sql = `UPDATE user SET id='${data.id}', pw='${data.pw}', name='${data.name}' WHERE id = ${data.id}`;
    cnn.query( sql, (err, rows) => {
        if( err ) throw err;
        cb (rows);
    })
}


// exports.delete = (id, pw, cb) => {
//     var sql = "select * from user where id = '" + id + "' and pw = '" + pw + "'";
// }
// // 복사해온 것
// exports.delete = (id, cb) => {
//     cnn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
//         if (err) throw err;
//         cb(rows);
//     });
// }