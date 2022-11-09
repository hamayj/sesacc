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
		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
		Scanner scanner = new Scanner(System.in);
		ArrayList<Integer> arrayList = new ArrayList<>();
		
		
		
		
		
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
