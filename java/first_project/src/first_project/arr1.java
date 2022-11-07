package first_project;

import java.util.Scanner;
import java.util.Arrays;

public class arr1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] intArray; // 1) 배열의 선언부
		// 사용하기 전에 크기가 지정돼야 함.
		intArray = new int[2]; // 2) 배열 생성.
		intArray[0] = 1; // 0번 인덱스에 1을 넣겠다.
		intArray[1] = 2;
		
		//int [] intArray = new int[2]; // 선언과 생성 동시에하기. 1+2
		
		int[] intArray2 = { 1, 2 }; //배열을 선언하면서 초기화까지 동시에 해줌.
		
		for(int i=0; i<intArray2.length; i++) {
			System.out.println(intArray2[i]);
		} // 인덱스로 접근해야만 값을 다 출력할 수 있음.
		
		
		// 배열처럼 보이게 만들기.
		for(int i=0; i<intArray2.length; i++) {
			if(i==0) System.out.print("[");
			
			System.out.print(intArray2[i]);
			
			if( i == intArray2.length-1) System.out.println("]");
			else System.out.print(", ");
		} // 인덱스로 접근해야만 값을 다 출력할 수 있음.
		
		// 원소를 이쁘게 만들어주는 toString
		System.out.println(Arrays.toString(intArray));
		
	}

}
