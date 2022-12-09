class Cat {
    // readonly name : string;
    constructor(readonly name:string){}
    sayHello() : string {
        return "야옹";
    }
}

class Fish {
    // diveNum? : number; 함수에서 한번에 써주기.
    // readonly name : string;
    constructor(readonly name:string){}
    dive(diveNum: number) : string {
        return `${diveNum}m 다이빙 했습니다.`
    }
}

type Pet = Cat|Fish;

function talkPet(pet:Pet): string {
    if(pet instanceof Cat) {
        return pet.sayHello();
    } else {
        return "물고기는 말을 하지 못합니다.";
    }
}

const cat1:Pet = 'name';
const fish1 = new Fish("fish1");

console.log(talkPet(cat1));
console.log(talkPet(fish1));
