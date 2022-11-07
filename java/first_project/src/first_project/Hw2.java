package first_project;
import java.util.Scanner;

public class Hw2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.println("이름을 입력하세요.");
		
		String name = scanner.next();
		
		switch (name) {
		case "홍길동" :
			System.out.println("남자");
			break;
			
		case "성춘향" :
			System.out.println("여자");
			break;
		default :
			System.out.println("모르겠어요");
		
		}

	}

}
