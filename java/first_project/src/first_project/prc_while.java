package first_project;
import java.util.Scanner;


public class prc_while {

	public static void prc_while(String[] args) {
		// TODO Auto-generated method stub
		for (int i=0; i<10; i++) {
			System.out.print( i +" ");
		}
		
		int i = 10;
		while(i<10) {
			System.out.print( i +" ");
			i++;
		}
		
		int j = 10;
		do {
			System.out.print( j +" ");
			j++;
		} // 조건이 어떻든 한번은 무조건 실행시키고 감.
		while (j < 10 ) ;
		
	
		Scanner scanner = new Scanner(System.in);
		while(true) {
			System.out.println("숫자를 입력하세요. 0을 입력하면 종료");
			int number = scanner.nextInt();
			
			if( number == 0 ) break;
		}
	}

}
