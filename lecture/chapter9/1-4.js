/**

	1-4. 네임스페이스를 사용할 때, 계속되는 확인 작업을 처리할 공용 함수 제작

**/

var MYAPP = MYAPP || {};

MYAPP.namespace = function(name){
	var parts = name.split('.'),
		parent = MYAPP,
		i;
	
	if(parts[0] === 'MYAPP'){
		parts = parts.slice(1);
	}
	
	for(i=0; i<parts.length; i++){
		parent[parts[i]] = parent[parts[i]] || {}; 
		parent = parent[parts[i]];
	}

	return parent;
}

var module2 = MYAPP.namespace('MYAPP.modules.module2'); 
console.log(module2 === MYAPP.modules.module2);
console.log(module2);

