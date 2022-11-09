package second_project;


public class Rectangle {
	public int width, height; // 1. 필드 선언 (클래스 내의 전역 변수)
	
	public Rectangle(int width, int height) { // 2. 생성자 (생성자명은 클래스명과 같아야 함)
		this.width = width;
		this.height = height;
	}
	
	public int rectangle() {
		return width * height; // 3. 메소드 생성 
	}
}
