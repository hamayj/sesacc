package third_1;

public class Kim extends Student {
	// 추상 클래스를 받고 있으면 추상 메서드의 메서드 오버라이딩을 해주면 에러 해결됨
	public Kim( String name, String school, int age, int student_Id) {
		super(name, school, age, student_Id ); // 생성자를 만들었기 때문에 하단 방법으로 못함.
//		setName(name);
//		setAge(age);
//		setStudent_Id(student_Id);
//		setSchool(school);
		
	}
	
	public void todo() {
		// 구현의 의미는 중괄호 여부.
		System.out.println("점심은 김가네 김밥");
	}
}
