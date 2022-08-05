const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost', //127.0.0.1
    user: 'user',
    password: 'SeSAC4web!',
    database: 'visitor'
}); // 처음 디비와 연결할 때 어떤 디비에 연결할지 정해야됨.
// 하나의 디비만 연결이 가능함.
// 여기까지가 연결 준비된 상태.

exports.get_visitors = (cb) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb(rows);
    });
}

// model은 req 객체를 쓸 수 없음...
exports.insert = ( name, comment, cb ) => {
    var sql = "insert into visitor(name, comment) values( '" + name +"', '" + comment + "')";
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb (rows.insertId);
    })
    // 이 부분 잘 이해 못했음.   '" "' 처리하는 이유.
}
