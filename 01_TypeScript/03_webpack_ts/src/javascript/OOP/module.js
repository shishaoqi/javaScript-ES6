// 模块
// JavaScript 不是一种模块化编程语言，在传统做法中，是如何利用对象来实现模块编程的呢

//(1)简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面
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