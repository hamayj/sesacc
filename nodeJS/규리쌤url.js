const url = require("url");
const { format } = require("url"); 
const a = url.format; // 
console.log( a );
console.log( format("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac") );
// const { URL } = url; // 객체라서 이런 방식으로 저장한건가?
// const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
// const naver = new URL(string); // 이렇게 복잡하게 저장을 해줘야 하는구만..?
// console.log( url.format( naver ) ); // 뭔뜻?
// console.log( url.parse(string)); // ^^ㅠ url.parse -> url문자열을 url 객체로 변환하여 리턴.
// console.log( naver.searchParams ); // ...?^^ url 공부좀 해야할뜼^^...
new url.URLSearchParams

// // 클래스new searchParam 으로 해결해도 되고 .searchParam으로 해결해도 됨. (??? 공부 좀 해야될듯)

// console.log(naver.searchParams.keys());
// console.log(naver.searchParams.values());
// naver.searchParams.delete("sm");
// console.log(naver.searchParams.keys());