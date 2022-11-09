package second_project;


public class Rectangle {
	private int width, height; // 1. 필드 선언 (클래스 내의 전역 변수)
	// Static 변수가 아니기 때문에 객체가 만들어질 때 생성됨.
	
	private static double pi = 3.14; // 클래스가 생길 때 공간을 할당 받음.
	
	public static void test() {
		// static으로 지정한 메서드는 일반 필드에 접근을 못함.
		// width = 1; 
		// getWidth();
//		this.width = 1;
		// width, getWidth(), this에 접근을 못함. width가 차지하고 있는 공간이 현재 없음.
		
	}
	
	public static double getPi() {
		return pi;
	}
	
	public Rectangle(int width) { // 2. 생성자 (생성자명은 클래스명과 같아야 함)
		this.width = width;
//		this.height = height;
	}

	
	public int getWidth() {
		pi = 3.5;
		getPi(); 
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
