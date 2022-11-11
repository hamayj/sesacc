package third_1;

public class Baek extends Student {
	public Baek( String name, String school, int age, int student_Id) {
		super(name, school, age, student_Id ); // 부모에 있는 생성자 호출. 각각의 값을 넣어서.
	}
	
	public void todo() {
		System.out.println("점심은 백종원 피자 ");
	}
}
