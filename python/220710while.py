# ex1. 숫자 반복하기
'''
num = 1 
while num <= 100:
    print(num)
    num += 1
'''
''' 
num이 100보다 작거나 같은 동안에
'''

# ex2. 입력받은 숫자만큼 반복하기


val = int(input())
num = 1
while num <= val :
    print('',val)
    num += 1 
    #while문은 여러줄로 구성됨. 자동 줄바꿈

# ex3. 제곱표
# 정수를 한 개 입력받아, 1부터 입력받은 수까지 각각에 대해 제곱을 구해 프린트하는 프로그램을 작성해 보세요. 단, while 문을 사용하세요.

val = int(input("정수를 입력하세요: "))
num = 1
while num <= val :
    print(num ," ", num*num)
    # print함수는 구분자가 , (+가 아님)
    # ,로 구분한 순간 이미 한 칸 띄워줌.
    num += 1

# shift + tab 내어쓰기

'''
num = int(input())

i = 1

while i <= num:
    print(i, i * i)
    i = i + 1
'''

'''
ex4. 얌체공
고무 공을 100 미터 높이에서 떨어뜨리는데, 이 공은 땅에 닿을 때마다 원래 높이의 3/5 만큼 튀어오릅니다. 공이 열 번 튈 동안, 그때마다 공의 높이를 계산합니다.
'''
# cf. 부동소수점의 한계?? 흠냐륑
hei = 100
i = 1
while i <= 10 :
    hei = hei * (3/5)
    # 윗줄에 바로 round 처리를 해버리니까 정수로 표현됨.
    print(i, round(hei, 4))
    i += 1

# ex5. 코드를 보고 실행결과 맞히기

number = 358

rem = rev = 0
while number >= 1:
    rem = number % 10
    rev = rev * 10 + rem
    number = number // 10

print(rev)


''' 
실행결과 :
rem=8
rev=8
// <- 이거 연산자인가?
응 그렇다네요. 나누기에 소숫점 이하를 버지를 연산자 (floor division)
number = 8
'''


