class Cat {
    constructor( name ){
        this.name = name;
        // this는 클래스 자체를 의미. 

        // 없어도 됨. 가장 처음에 실행되는 코드
        // 처음 클래스를 만들 때 속성이 필요하다면 필요함.
    }
    mew(){
        console.log( this.name + " 야옹");
    } // +로 이어줘야 함.
}

var cat1 = new Cat("나비"); // 클래스를 이용해 객체를 만들었음.
var cat2 = new Cat("냥이");
console.log(cat1);
cat1.mew();
cat2.mew();

// 틀을 만든 이유는 동일한 객체를 만들어야 할 수 있기 때문.
// 객체에 이름을 부여할 거임. 근데 바로 받을 수 있는게 아니고 틀에서 받는게 있어야 함.  -> 그 받는 것이 constructor

// 클래스 깊게 들어가면 더 어려워짐
