const fs = require("fs");

fs.readFile("./text.txt", (err, data)  => {
    if (err) throw err;

    console.log(data);
    console.log(data.toString());
});

//throw 에러를 자동으로 우리에게 던짐.????
// 던지면서 어떤 에러가 났는지도 우리에게 보여줌.
ㄴ