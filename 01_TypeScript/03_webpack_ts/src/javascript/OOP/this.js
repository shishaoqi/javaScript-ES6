
//this关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。

var A = {
    name: '张三',
    describe: function() {
        return '姓名：' + this.name
    }
}
console.log(A.describe())

// ？？？
var name = '李四';
var f = A.describe;
console.log(f());


//由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的。
var B = {
    name: '李四'
};
B.describe = A.describe;
console.log(B.describe())
//上面代码中，A.describe属性被赋给B，于是B.describe就表示describe方法所在的当前对象是B，
//所以this.name就指向B.name。



//场景一
//由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。
var f = function () {};
var obj = { f: f };

// 单独执行
f()

// obj 环境执行
obj.f()


//场景二
//JavaScript 允许在函数体内部，引用当前环境的其他变量。
var f2 = function () {
    console.log(x);
};
//上面代码中，函数体里面使用了变量x。该变量由运行环境提供。

//现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，
//能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
var f3 = function () {
  console.log(this.x);
}
//上面代码中，函数体里面的this.x就是指当前运行环境的x。
var f4 = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
    f4: f4,
    x: 2,
};

// 单独执行
// 函数f在全局环境执行，this.x指向全局环境的x
f4() // 1

// obj 环境执行
// 在obj环境执行，this.x指向obj.x
obj.f4() // 2



// this 使用场合
//（1）全局环境
//（2）构造函数
//（3）对象的方法


//（1）全局环境
//全局环境使用this，它指的就是顶层对象window
console.log('全局环境this: ', this)//???
function f_global() {
    console.log('1111 this === window: ');
    console.log(this === window);
}
f_global();
console.log('this === window: ', this === window)// true
console.log('window: ', window)

//（2）构造函数
var Obj = function(p) {
    this.p = p;
}
//上面代码定义了一个构造函数Obj。由于this指向实例对象，
//所以在构造函数内部定义this.p，就相当于定义实例对象有一个p属性
var o = new Obj('Hello World');
console.log(o.p) 

//（3）对象的方法
// 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。
var obj ={
    foo: function () {
      console.log(this);
    }
};

obj.foo() // obj
//上面代码中，obj.foo方法执行时，它内部的this指向obj
//但是，下面这几种用法，都会改变this的指向。
// 情况一
//(obj.foo = obj.foo)() // window // 实际：Uncaught TypeError: obj.foo(...) is not a function
// 情况二
//(false || obj.foo)() // window // 实际：Uncaught TypeError: obj.foo(...) is not a function
// 情况三
//(1, obj.foo)() // window  // 实际：Uncaught TypeError: obj.foo(...) is not a function




//使用注意点
//(1)避免多层 this
var o = {
    f1: function () {
        console.log('f1: ', this);
        var f2 = function () {
            console.log('f2', this);
        }();
    }
}
o.f1()
// Object
// Window
//上面代码包含两层this，结果运行后，第一层指向对象o，第二层指向全局对象


// 为上面的问题，找解决方法
var o2 = {
    f1: function() {
        console.log('o2.f1: ', this);
        var that = this;
        var f2 = function() {
            console.log('o2.f2: ', that);
        }();
    }
}
o2.f1()
// Object
// Object


//JavaScript 提供了严格模式，也可以硬性避免这种问题。严格模式下，如果函数内部的this指向顶层对象，就会报错。
var counter = {
  count: 0
};
counter.inc = function () {
  //'use strict';  // 打开注释就会报下面的错误
  this.count++
};
var f = counter.inc;
f()
// TypeError: Cannot read property 'count' of undefined


// 避免事项 ---》（1）（2）（3）
//（1）注意：避免数组处理方法中的 this
// 数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。(解决办法有2个--看链接)
var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        });
    }
}
  
o.f()
// undefined a1
// undefined a2

//（2）避免回调函数中的 this
//回调函数中的this往往会改变指向，最好避免使用。

var o = new Object();
o.f = function () {
  console.log(this === o);
}

// jQuery 的写法 
//$('#button').on('click', o.f);
//上面代码中，点击按钮以后，控制台会显示false。原因是此时this不再指向o对象，
//而是指向按钮的 DOM 对象，因为f方法是在按钮对象的环境中被调用的。这种细微的差别，很容易在编程中忽视，导致难以察觉的错误。