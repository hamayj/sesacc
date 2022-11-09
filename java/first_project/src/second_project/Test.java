package second_project;

import third.Third;

public class Test {
	//클래스 안에서 변수 선언하기
	public int num; //자료형 필드
	public String str = "문자열"; // 초기화까지 완료
	
	public int test() {
		// void쓰면 반환값이 없음. return이라는 키워드가 없음.
		return 1;
	} // 메서드 선언
	
	// 생성자 선언 (js에서는 contructor라는 것을 이용해서 생성했었음)
	public Test(int num) { // 매개변수로 들어간 int num은 위에 들어간 num과는 다름.
		// 생성자에서는 리턴타입이 없음. 리턴타입을 지정하지도 않음.
		// 생성자는 클래스와 이름이 같아야 함. 
		num = 1 ; // 객체 안의 num이 다 1로 초기화 됨.
		this.num = num; // 그냥 num을 쓰면 가장 가까운 num을 가져다 쓰는 것.
		// 같은 이름이 있을 때는 클래스내의 변수인지 , 매개변수인지 구분을 해줘야 함.
		// this를 사용하겠다는 것은 클래스 자신을 가리키는 것. 클래스 내에 있는 num을 가져오겠단 소리.
	}
	
	public void testMethod() {
		System.out.println("test");
		Third sec = new Third();
		// int a = sec.num; num필드가 protected여서 가져오지 못함. 
		// 다른 패키지에 있어도 자식클래스면 허용한다?
	}
}
