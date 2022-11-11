package third;

public abstract class Person {
	private int age;
	private String name;
	
	public abstract void printName(); // 선언은 돼잇으나 구현은 돼 있지 않은 메소드. : 추상 메소드
	public abstract void todo(); // 자식클래스에서 정의하면 됨.

	public Person(String name) { //생성자가 생략돼있는 형태. 이 경우에는 자식클래스에서 부모 클래스를 호출하지 않아도 됨.
		this.name = name;
//		this.age = age;
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
