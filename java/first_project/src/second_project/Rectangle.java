package second_project;


public class Rectangle {
	public int width; // 1. 필드 선언 (클래스 내의 전역 변수)
	private int height;
	
	public Rectangle(int width, int height) { // 2. 생성자 (생성자명은 클래스명과 같아야 함)
		this.width = width;
		this.height = height;
	}
	
	// getter : 메소드 내 width를 리턴해주는 메소드를 만들 것.
	public int getWidth() {
		return width;
	}
	public int getHeight() {
		return height;
	}

	public int rectangle() {
		return width * height; // 3. 메소드 생성 
	}

	// setter : 상단 source에서 generate getter, setter를 사용해서 만들 수 있다.
	public void setWidth(int width) {
		this.width = width;
	}

	public void setHeight(int height) {
		this.height = height;
	}
}
