package first_project;
import java.util.Scanner;

public class Hw4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.println("숫자 2개를 입력하세요");
		int age1 = scanner.nextInt();
		int age2 = scanner.nextInt();
		System.out.println(age1 + " " + age2);
		System.out.println("덧셈 결과 : " + (double)(age1 + age2));
		// 쓰는거 헷갈려서 double(age1 + age2) 이런식으로 썼었음.
		// (double)로 쓰자.
		// (double)age1 + age2  => 덧셈 결과 : 10.03이 나옵니다. 
		System.out.println("뺄셈 결과 : " + (double)(age1 - age2));
		// 이렇게는 못 빼나요? ()를 쳐주고 하면 됨.
		System.out.println("나눗셈 결과 : " + (double)age1 / age2);
		System.out.println("곱셈 결과 : " + (double)age1 * age2);
	}
}
