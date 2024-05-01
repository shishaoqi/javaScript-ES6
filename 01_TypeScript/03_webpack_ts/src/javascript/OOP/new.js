// 典型的面向对象编程语言（比如 C++ 和 Java），都有“类”（class）这个概念。
// 所谓“类”就是对象的模板，对象就是“类”的实例。

// 但是，JavaScript 语言的对象体系，不是基于“类”的，而是基于：构造函数（constructor）
// 和 原型链（prototype）。


// JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，
//就是专门用来生成实例对象的函数。它就是对象的模板，描述实例对象的基本结构。一个构造函数，
//可以生成多个实例对象，这些实例对象都有相同的结构。


//构造函数就是一个普通的函数，但具有自己的特征和用法。
var Vehicle = function () {
  this.price = 1000;
};
//上面代码中，Vehicle就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。

//构造函数的特点有两个。
// 1. 函数体内部使用了this关键字，代表了：所要生成的对象实例。
// 2. 生成对象的时候，必须使用new命令。



//new 命令
//new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号

//new 命令的原理
//1.创建一个空对象，作为将要返回的对象实例。
//2.将这个空对象的原型，指向构造函数的prototype属性。
//3.将这个空对象赋值给函数内部的this关键字。
//4.开始执行构造函数内部的代码。


//new命令总是返回一个对象，要么是实例对象，要么是return语句指定的对象。


//new.target


//Object.create() 创建实例对象