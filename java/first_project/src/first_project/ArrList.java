package first_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;



public class ArrList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> arrayList1 = new ArrayList<>();
		ArrayList<Integer> arrayList2 = new ArrayList<>();
		for( int i=0; i<10; i++) {
			arrayList2.add(i);
		}
//		ArrayList<Double> arrayList2 = new ArrayList<>();
//		ArrayList<String> arrayList3 = new ArrayList<>();
	
		arrayList1.add(1);
		// [ 1 ]
		arrayList1.add(2);
		// [ 1, 2 ]
		arrayList1.add(0, 2);
		// [ 2, 2 ]가 아니고 하나씩 밀린 값이 들어감. [2, 1, 2]
		
		arrayList1.addAll(arrayList2);
		// [2, 1, 2, 0, 1, 2, ... , 9]
		
		
		arrayList1.remove(0); // 0번째 인덱스 값을 삭제한다.
		
		arrayList1.clear();
		// [] 빈 배열 만들어줌.
		
		for (int i=0; i<arrayList1.size(); i++) {
			System.out.print(arrayList1.get(i) + " ");
		}
		
//		for (int value : arrayList1) {
//			System.out.print( value + " "); 
//		}
		
		System.out.println(arrayList1.indexOf(10));
		// 처음찾은 요소의 인덱스를 리턴함. 인덱스가 존재하지 않으면 -1을 출력.
		
		System.out.print("\n"+arrayList1.size());
		
		
	}

}
