package second_project;


public class Rectangle {
	private int width, height; // 1. 필드 선언 (클래스 내의 전역 변수)
	// Static 변수가 아니기 때문에 객체가 만들어질 때 생성됨.
	
	private static int COUNT = 0; // 선언되는 순간에 객체가 없기 떄문에 0으로 셋팅.
	
	// private 변수기에 getter 필요함.
	public static int getCount() {
		return COUNT;
	}
	
	
	public Rectangle(int width) { // 2. 생성자 (생성자명은 클래스명과 같아야 함)
		COUNT++; // 객체 생기면 여기 무조건 들어옴.
		this.width = width;
//		this.height = height;
	}

	
	public int getWidth() {
		return width; // 다른 클래스에서 width값을 가져오고 싶어서 사용.타 클래스에서 쓸 수 있도록 return
	}

	public void setWidth(int width) {
		this.width = width; // 타 클래스에서 width값을 조정하고 싶어서 사용하는 setter. public 접근제어자로 써주기.
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int rectangle() {
		return width * height; // 3. 메소드 생성 
	}

}
