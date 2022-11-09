package second_project;
import java.util.Scanner;
import java.util.InputMismatchException;


public class prc_exception {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] intArray = {1, 2, 3, 4};
//		intArray = new int[4];
		
		
		try {
			for(int i=0; i<intArray.length + 1; i++) {
				System.out.println(intArray[i]);
			}
		}
		catch (ArrayIndexOutOfBoundsException e){
			System.out.println("인덱스가 범위를 벗어났습니다.");
		}
	}

}
