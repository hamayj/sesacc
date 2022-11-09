package first_project;
import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;

public class HwArrList {

	public static void main(String[] args) {
		ArrayList<String> arrayList = new ArrayList<>();
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			System.out.println("문자를 입력해주세요. : ");
			String str = scanner.nextLine();
			
			if ( str.equals("exit")) {
				break;
			} 
			else arrayList.add(str);
		}
		for (int i =0; i < arrayList.size(); i++) { // length아니고 size()임. size는 메서드구만?
			System.out.println(arrayList.get(i));
		}		
	}
}
