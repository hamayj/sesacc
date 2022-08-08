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

exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id인 데이터를 1개만 검색한다.
    cnn.query(`select * from visitor where id = ${id} limit 1;`, (err, rows) => { 
        // %{id} -> ??? 이거 뭔데..? id를 선택하는건 알겠는데, 내가 누른 id? 어떻게 아는거여?
        if(err) throw err;
        cb(rows);
    })
}

exports.update = (data, cb) => {
    // 쿼리는 어떻게 돼야 하나
    let sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id = ${data.id}`;
    // 이름과 코멘트를 넘어온 값으로 바꿔준다
    cnn.query( sql, (err, rows) => {
                if( err ) throw err;
        cb (rows);
    })
}

exports.delete = (id, cb) => {
    cnn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}