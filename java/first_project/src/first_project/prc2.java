package first_project;
import java.util.Scanner;

public class prc2 {
	public static void main(String[] args) {
		int number = 9;
		
		String str = '홍길동';
		if (number % 3 == 0) {
			System.out.println("3의 배수 ");
		}
		else System.out.println("3의배수 아님");
		
		
		switch(number%3) {
		case 0:
			System.out.println("3의 배수 ");
			break;
		default :
			System.out.println("3의 배수 아님");
		}
	}

}
