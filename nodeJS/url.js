//네이버에서 새싹을 가져왔을 때의 url을 가져와서 작업을 하겠음.
const { console } = require("console");  // 이 코드 내용을 모르겠다.
const url = require("url");
const { URL } = url; // 대문자 URL 클래스를 가져와야됨 (???) 무순말이지

const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=hWRstlp0Yihssk2cd5lssssstkR-131165" ; // 이렇게 넣어줘야 컨트롤이 가능.

const naver = new URL(string);


console.log(url.format(naver));
console.log(url.parse(string));

// URL 만 쓰지는 않음. url을 쓸 때 중요한 것이 search.naver? 뒤에 어떤게 나와있느냐..

console.log(naver.searchParams);