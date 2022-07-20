// function func(){
//     return new Promise(function(resolve, reject){
//         resolve(1);
//     });
// }

async function func(){
    return 1 ;
} // 두개가 같다고 하는데 공부를 해야겠음 ^~^

func().then(function(result){console.log(result);})