// http 모듈을 로드
var http = require("http");
/*
모듈 = 외부 애플리케이션 및 라이브러리
HTTP 모듈을 로드해서 로컬 변수에 할당
HTTP 모듈은 기본 HTTP 기능을 제공하여 애플리케이션이 네트워크에 접근할 수 있게 만들어준다.
*/
// http 서버를 생성
http.createServer(function (req, res) {
/*
createServer() 함수를 이용해서 서버를 생성
매개변수로 익명함수를 전달하며, 이 익명 함수는 requestListener 함수로 서버 요청(http.ServerRequest)과
서버 응답(http.ServerResponse)이라는 두개의 매개변수를 가진다.
*/
    // 컨텐츠 헤더
    res.writeHead(200, { "content-type": "text/plain" });
    // 메시지를 쓰고 통신이 완료되었다는 신호를 보냄
    res.end("Hello, World\n");
  })
  .listen(8124);

console.log("Server running on 8124");
