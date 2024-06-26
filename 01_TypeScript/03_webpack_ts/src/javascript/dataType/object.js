// 什么是对象？
// 简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。

/**
    对象是最复杂的数据类型，又可以分成三个子类型。

    1. 狭义的对象（object）
    2. 数组（array）
    3. 函数（function）

    狭义的对象和数组是两种不同的数据组合方式，
    除非特别声明，本教程的“对象”都特指狭义的对象。
 */

var obj = {
    foo: 'Hello', //对象的属性之间用逗号分隔，
    // 最后一个属性后面可以加逗号（trailing comma），
    bar: 'World'
};
// 上面代码中，大括号就定义了一个对象，它被赋值给变量obj，所以变量obj就指向
// 一个对象。该对象内部包含两个键值对（又称为两个“成员”），第一个键值对是
// foo: 'Hello'，其中foo是“键名”（成员的名称），字符串Hello是“键值”（成员的值）

// 对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。
// 如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

var obj = {
    p: function (x) {
      return 2 * x;
    }
};
  
obj.p(1) // 2


// 如果属性的值还是一个对象，就形成了：链式引用。
var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
o1.foo.bar // "hello"
// 上面代码中，对象o1的属性foo指向对象o2，就可以链式引用o2的属性。


// 对象的引用 ---------------------- 
/**
 * 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，
 * 也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。
 */
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
//上面代码中，o1和o2指向同一个对象，因此为其中任何一个变量添加属性，
//另一个变量都可以读写该属性。

//此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。
var o1 = {};
var o2 = o1;

o1 = 1;
o2 // {}


// 属性 可以动态创建，不必在对象声明时就指定。
var obj = {};
obj.foo = 123;
obj.foo // 123


// 属性的操作 ---------------------- ??? 这个居然不门清？？
// https://wangdoc.com/javascript/types/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E6%93%8D%E4%BD%9C
// 1. 属性的读取
// -- 读取对象的属性，有两种方法，一种是使用点运算符，
// 还有一种是使用方括号运算符。
var obj = {
    p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World" //请注意，如果使用方括号运算符，键名必须放在引号里面
// 如果没有加引号，会如何？ 更多请原文链接

// 2. 属性的赋值

// 3. 属性的查看: Object.keys()
console.log('对象的属性：', Object.keys(obj))

// 4. 属性的删除：delete obj.attr
var obj = { p: 1 };
Object.keys(obj) // ["p"]
delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

// 5. 属性是否存在：in 运算符
// in 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。--- obj.hasOwnProperty()
var result;
var obj = { p: 1 };
result = 'p' in obj // true
console.log('p in obj: ', result)
result = 'toString' in obj // true
console.log('toString in obj: ',  result)

// 6. 属性的遍历：for...in 循环
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}


// with 语句
// 例一
var obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    p1 = 4;
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
    console.log(href);
    console.log(title);
    console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);