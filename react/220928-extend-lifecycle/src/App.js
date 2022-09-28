
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Shape {
}

class Triangle extends Shape {
  constructor(x,y,name) {
    super(x,y);
    this.name = name;
  }
  getArea(){
    return this.w*this.h/2;
  }
}

let shape1 = new Shape(5,4);
console.log( shape1.getArea() );

let shape2 = new Shape(2,3);
console.log( shape2.getArea() );

let shape3 = new Square(4,8);
console.log( shape3.getArea() );
let shape4 = new Triangle(5,6, 'test');
console.log( shape4.getArea());

// class는 틀이기 때문에, 이 클래스에 담은 요소, 속성 값이 다르기 때문에 나오는 변수들도 달라지는 것.

// 실습1 extend 익히기.
class Student {
  constructor(name, school, age, num) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.num = num;
  }
  getInfo(){
    return (
      "성명 :"+this.name + " " + "\n" +
      "학교 :"+this.school + " " + "\n" +
      "나이 :"+this.age + " " + "\n" +
      "학번 :"+this.num
    );
    // 변수를 쉼표로 연결하니까 return이 안됐었음.
    // 변수를 연결할 때는 +로 해주는거다.
    // `${this.name} ${this.chool}`;
  }
}


class Kim extends Student {
  constructor(a,b,c,d,language){
    super(a,b,c,d);
    this.language = language;
  }
}

class Lee extends Student {
  constructor(a,b,c,d,language){
    super(a,b,c,d);
    this.language = language;
  }
  getInfo(){
    return (
      "성명 :"+this.name + " " + "\n" +
      "학교 :"+this.school + " " + "\n" +
      "나이 :"+this.age + " " + "\n" +
      "학번 :"+this.num + "\n" +
      "모국어 :" + this.language
    );
  }
}

let kim = new Kim("kim", "새싹초", 11, 11, "korean");
let lee = new Lee("lee", "새싹중", 12, 12, "english");

console.log(kim.getInfo());
console.log(lee.getInfo());