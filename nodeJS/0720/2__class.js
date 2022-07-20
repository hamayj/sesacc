class Car {
    constructor(color){
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }

    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
}

// 완성해야 함.

module.exports = { Car };