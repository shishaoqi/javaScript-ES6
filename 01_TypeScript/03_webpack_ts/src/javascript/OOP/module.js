(function(){

// 模块
console.log('------- 模块 -')
// JavaScript 不是一种模块化编程语言，在传统做法中，是如何利用对象来实现模块编程的呢???

//(1)简单的做法是: 把模块写成一个对象，所有的模块成员都放到这个对象里面
var m1 = new Object({
    _count : 0,
    f1 : function(){
        console.log('Module1.f1');
    },
    f2 : function(){
        console.log('Module1.f2');
    },
});

m1.f1();
m1.f2();

//(2)封装私有变量：构造函数的写法
function StringBuilder() {
    var buffer = [];

    this.add = function(str){
        buffer.push(str)
    };
    this.toString = function(){
        return buffer.join('')
    }
}
var str = new StringBuilder;
str.add('aaa');
str.add('bbb');
console.log(str.toString());
StringBuilder.buffer = ['change buffer'];
console.log(str.toString());

var str2 = new StringBuilder;
console.log(str2.toString());


//(3)封装私有变量：立即执行函数的写法

// 另一种做法是使用“立即执行函数”（Immediately-Invoked Function Expression，IIFE），
// 将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的
var module1 = (function(){
    var _count = 0;
    var m1 = function(){
        console.log('IIFE m1')
    };
    var m2 = function(){
        console.log('IIFE m2')
    };
    return {
        m1: m1,
        m2: m2
    }
})()
//上面的module1就是 JavaScript 模块的基本写法

//外部代码无法读取内部的_count变量。
console.info(module1._count); //undefined
module1.m1();



// 模块的 宽放大模式
//如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用“放大模式”（augmentation）。
var module1 = (function (mod){
    mod.m3 = function () {
        //...
        console.log('add a new function: m3')
    };

    return mod;
})(module1);
//上面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块
module1.m3();

// “宽放大模式”的由来：在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。
// 如果采用上面的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"（Loose augmentation）
var module2 = (function(mod){
    var _count = 0;
    var module2_m1 = function(){
        module1.m1(); // 调用另一个模块
        console.log('module2 IIFE m1')
    };
    var module2_m2 = function(){
        module1.m2();
        console.log('module2 IIFE m2')
    };

    return {
       mod,
       module2_m1,
       module2_m2
    }
})(window.module1 || {})
module2.module2_m1();
//与"放大模式"相比，“宽放大模式”就是“立即执行函数”的参数--可以是空对象。


//将其他变量输入模块
//例如，输入全局变量
(function($, window, document){
    function go(num){

    }

    function handleEvents(){

    }

    function initialize(){
        console.log('initialize executed')
    }

    function dieCarouselDie(){
        console.log('dieCarouselDie executed')
    }

    //attach to the global scope
    window.finalCarousel = {
        init: initialize,
        destroy: dieCarouselDie
    }
})(module1, window, document)
//上面代码中，finalCarousel对象输出到全局，对外暴露init和destroy接口
// ??? 没明白 以上代码




})()