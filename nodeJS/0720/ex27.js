const fs = require("fs").promises;
const path = require("path");

async function exec(){
    await fs.mkdir('./sesac', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('폴더생성!')
    });
    // .. 두 번 쓰면 같은 폴더?
    await fs.writeFile("./sesac.txt", "반갑습니다");
    await fs.copyFile("./sesac.txt", "./sesac2.txt");
    await fs.rename("sesac2.txt", "new.txt");
}
exec();