# 베이스 이미지를 명시
FROM node:16

# 작업 디렉토리 생성
WORKDIR /app

# 소스 추가
COPY . /app
# 필요한 파일들 다운로드
RUN npm install

# 포트 매핑
EXPOSE 3000

# (실행 명령) 컨테이너 시작시 실행될 명령어. 
CMD ["npm", "run", "start"]
