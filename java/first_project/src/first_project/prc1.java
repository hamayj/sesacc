package first_project;
import java.util.Scanner;

public class prc1 {
	public static void main(String[] args) {
		System.out.println("이름을 입력하세요.");
		Scanner scanner = new Scanner(System.in);
		String name = scanner.next();
		
		System.out.println("나이를 입력하세요.");
		int age = scanner.nextInt();
		
		System.out.println("안녕하세요!" + name + "님" + "("+age+ "세" +")" );
		
	}

}


