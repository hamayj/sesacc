package first_project;
import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;


public class HwArr1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int[] intArray = new int[5];
		int count = 0; // int 변수 지정.
		
		System.out.println("5개의 정수를 입력하세요");
		
		// 배열에 숫자를 어떻게 입력받을지 몰랐음.
		for (int i=0; i < intArray.length; i++) {
			intArray[i] = scanner.nextInt();
			count += intArray[i];
		} // 왜 count가 이렇게 나오지.
		
		System.out.println((double)count/5);
	}

}
