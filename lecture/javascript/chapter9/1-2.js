/**

	1. 네임스페이스 패턴
	- 

**/

//1-1의 예제를 리펙토링 하면

var MYAPP = {};

MYAPP.Parent = function(){};
MYAPP.Child = function(){};

MYAPP.some_var = 1;
MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {
								a : 1,
								b : 2
							 };
MYAPP.modules.module1 = {};