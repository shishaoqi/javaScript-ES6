(function(){

})();

//正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。
(function(){
    'use strict';

    //v = 1; // 报错，v未声明
    //var v = 1; // 报错，v未声明

    for (var i = 0; i < 2; i++) { // 去掉 var 就会报错，i 未声明
    // ...
    }

    function f() {
        //x = 123;
    }
    f() // 报错，未声明就创建一个全局变量
})();

//正常模式下，函数内部的this可能会指向全局对象，严格模式禁止这种用法，避免无意间创造全局变量。
(function(){
    // 正常模式
    function f() {
        console.log(this === window);
    }
    f() // true
    
    // 严格模式
    function f() {
        'use strict';
        console.log(this === undefined); //严格模式的函数体内部this是undefined
    }
    f() // true

    //这种限制对于构造函数尤其有用。使用构造函数时，有时忘了加new，这时this不再指向全局对象，而是报错。
    function f1() {
        'use strict';
        this.a = 1;
    };

    //f1();// 报错，this 未定义
    fn = new f1(); //正常
})();


//严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。



//JavaScript 语言的下一个版本是 ECMAScript 6，为了平稳过渡，严格模式引入了一些 ES6 语法。
//严格模式新增了一些保留字（implements、interface、let、package、private、protected、public、static、yield等）。
//使用这些词作为变量名将会报错。