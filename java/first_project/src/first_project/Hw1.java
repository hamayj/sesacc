package first_project;
import java.util.Scanner;


public class Hw1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("나이를 입력하세요.");
		Scanner scanner = new Scanner(System.in); // 스캐너 셋
		
		int age = scanner.nextInt();
		
		if ( 0 < age < 8 ) {
			System.out.println("유아 ");
		} else if ( 7 < age < 14 ) {
			System.out.println("초등학생 ");
		} else if ( 13 < age < 17 ) {
			System.out.println("중학생 ");
		} else if ( 16 < age < 20 ) {
			System.out.println("고등학생 ");
		} else {
			System.out.println("성인 ");
		}
	}
}
