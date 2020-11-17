var module = require('./custom_module');

// 1. formatted 특수문자 %d를 사용해서 module.sum( ) 에서 리턴된 숫자값을 출력
console.log('sum = %d' , module.sum(100));

// 2. formatted 특수문자 %s를 사용해서 module.var1의 문자값을 출력
console.log('var1 = %s' , module.var1);


/*
C언어 출력타입 %d, %f, %e, %o, %x, %u, %g ......


%d: 10진수(정수형)

%f: 실수형

%e: 지수형

%o: 8진수

%x: 16진수

%u: 부호없는 10진수

%g: 실수형 자동출력

%p: 포인터의 주소

%c: 하나의 문자로 출력

%s: 문자열
*/