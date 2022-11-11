package third;

public class Student extends Person {
	private String school;
	
	public void printName() {
		System.out.println(getName());
	}
	
	public void todo() {
		System.out.println("공부");
	}
	
	public Student(int age, String name) {
		super(name); // 수퍼 클래스에 생성자를 호출하겠다.부모 클래스의 생성자를 불러온다.
		setAge(age);
//		setName(name);
	}
	
	public String getSchool() {
		return school;
	}
	
	public void setSchool (String school) {
		this.school = school;
	}
}
