package first_project;
import java.util.Scanner;

public class Hw3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.println("숫자를 입력하세요.");
		int number = scanner.nextInt();
		
		for (int i = 1; i < number+1; i++) {
			System.out.print(i + " ");
		}

	}

}
