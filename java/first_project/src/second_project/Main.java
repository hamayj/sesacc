package second_project;
import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		Test test = new Test(5); // new 키워드 사용. 생성자를 불러오는 것.
		// test는 객체. Test class의 인스턴스. 객체와 인스턴스는 둘이 유사한 표현이기는 하지만 인스턴스는 클래스와의 관계성까지 설명함.
		System.out.println(test.num); // 필드(변수) 사용.
		test.testMethod();
		
		// 실습 과제 : 클래스 
//		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
//		Scanner scanner = new Scanner(System.in);
//		int width = scanner.nextInt();
//		int height = scanner.nextInt();
//		Rectangle rectangle = new Rectangle(width, height);
//		
//		System.out.println(rectangle.rectangle());
		
		// 실습 과제 3: getter, setter 사용.
		Scanner scanner = new Scanner(System.in);
		
		// Retangle이라는 객체를 넣고 싶으니 Retangle을 넣줌.
		ArrayList<Rectangle> rects =  new ArrayList<>();
		
		while (true) { // 횟수를 모르기 떄문에 for 문으로 돌리지 않음.
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
			int width = scanner.nextInt(); // 처음 공백 전까지의 숫자를 width에 담음.
			int height = scanner.nextInt(); // 다음 공백 수를 height에 넣음.
			// 5 10
			
			// 0 0 이 들어오면 객체를 만들 필요도 없기 때문에 객체 만들기 전에 if 문 넣어줬응.
			if(width == 0 && height == 0) break;
			
			Rectangle rect = new Rectangle(width);
			rect.setHeight(height); // setter 사용해서 height 넣어주기
		
			rects.add(rect); // 배열에 넣게 됨.
		}
		// 	배열에 사용할 수 있는 for 문 사용. rects라는 객체의 value하나하나를 사용하겠다.
		// 자료형이 Rectangle이기 때문에 Rectangle 적어둔 것.
		for (Rectangle value: rects) {
			System.out.println("가로 길이는: "+ value.getWidth());
			System.out.println("세로 길이는: "+ value.getHeight());
			System.out.println("넓이는: "+ value.rectangle());
			System.out.println("-----------------------");
		}
		
		
		

		
		
		
		
		
//		Scanner scanner = new Scanner(System.in);
		System.out.println("숫자를 입력해주세요.");
		int num = 0; // 초기화 해줘야 쓸 수 있음.
		try {
			num = scanner.nextInt();
		}
		catch (InputMismatchException e){
			System.out.println("숫자를 입력해야 해요.");
		}
		
		System.out.println("숫자" + num );
		
		scanner.close(); // 안해도 프로그램상 아무 문제 없지만 그냥 해주는게 좋다.
//		int num1 = 5;
//		int num2 = 0;
//			
//		try {
//			System.out.println(num1/num2);
//		}
//		catch(ArithmeticException e) {
//			System.out.println("0으로 나눌 수 없음.");
//		}
//		finally {
//			System.out.println("무조건 나오는 finally");
//		}
//
//		System.out.println("aaa"); // console.log와 같은 출력문
	}

}
