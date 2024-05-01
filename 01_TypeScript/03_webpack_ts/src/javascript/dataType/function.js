// 建议读原网址链接
// https://wangdoc.com/javascript/types/function

//函数的声明

// 1
// function命令声明的代码区块
function print(s) {
    console.log(s)
}

// 2
// 变量赋值的写法，这种写法将一个匿名函数赋值给变量。
// 这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。
var print = function(s) {
    console.log(s)
}

// 3
// 第三种声明函数的方式是Function构造函数。
var add = new Function( //Function构造函数可以不使用new命令
    'x',
    'y',
    'return x + y'
);

// 等同于
function add(x, y) {
    return x + y;
}


//函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）
//如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）

//注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]


//同名参数
//如果有同名的参数，则取最后出现的那个值。
function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
//调用函数f()的时候，没有提供第二个参数，a的取值就变成了undefined。这时，如果要获得第一个a的值，可以使用arguments对象。
function f(a, a) {
    console.log(arguments[0]);
}

f(1) // 1

//arguments 对象
//通过arguments对象的length属性，可以判断函数调用时到底带几个参数。


// 立即调用的函数表达式
function(){ /* code */ }();
// SyntaxError: Unexpected token (
//产生这个错误的原因是，function这个关键字既可以当作语句，也可以当作表达式。

// 语句
function f() {}
// 表达式
var f = function f() {}

//当作表达式时，函数可以定义后直接加圆括号调用。
var f = function f(){ return 1}();
f // 1
//上面的代码中，函数定义后直接加圆括号调用，没有报错。原因就是function作为表达式，引擎就把函数定义当作一个值。这种情况下，就不会报错。

//为了避免解析的歧义，JavaScript 规定，如果function关键字出现在行首，一律解释成语句。因此，引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。
//函数定义后立即调用的解决方法，就是不要让function出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();


//通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；
//二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());