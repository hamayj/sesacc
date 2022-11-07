package first_project;

import java.util.Scanner;
import java.util.Arrays;

public class forEach {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] intArray; // 1) 배열의 선언부
		// 사용하기 전에 크기가 지정돼야 함.
		intArray = new int[2]; // 2) 배열 생성.
		intArray[0] = 1; // 0번 인덱스에 1을 넣겠다.
		intArray[1] = 2;
		
		//int [] intArray = new int[2]; // 선언과 생성 동시에하기. 1+2
		
		int[] intArray2 = { 1, 2, 5 }; //배열을 선언하면서 초기화까지 동시에 해줌.
		
		
		for (int value: intArray2) {
			System.out.print(value);
		} // value는 
		//0번 인덱스가 끝나면 1번 인덱스로 감.
		
		
		System.out.println(Arrays.toString(intArray));
		
	}

}
