// http 모듈 로드
var http = require('http');
var fs = require('fs');

// http 서버 생성
http.createServer(function (req, res){
  // helloworld.js를 열고 읽음
  fs.readFile('helloworld.js', 'utf8', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/plain'})

    if(err){
      // 에러
      res.write('파일을 읽기를 실패했습니다.')
    }else{
      // 오류가 없으면 JS 파일을 클라이언트에게 쏜다 

    }
  })
})