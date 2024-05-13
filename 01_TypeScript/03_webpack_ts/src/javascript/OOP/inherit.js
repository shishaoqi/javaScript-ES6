// 继承

// JavaScript语言的继承不通过 class，而是通过“原型对象”（prototype）实现
// ES6 引入了 class 语法（基于 class 的继承不在这个教程介绍，请参阅《ES6 标准入门》一书的相关章节）

// 下面说的是 JavaScipt 的原型链继承


//JavaScript 通过构造函数生成新对象，因此构造函数可以视为对象的模板。
//实例对象的属性和方法，可以定义在构造函数内部。
// 总结：构造函数 === 对象
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.echoName = function (){
        console.log(this, this.name)
    }
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');
cat1.echoName();

// --------------- 属性1 prototype ------------------
// prototype 属性的作用 
//(1)每个函数都有一个prototype属性，指向一个对象。
function fn(){}
console.log('typeof fn.prototype: ', typeof fn.prototype) //"object"
//(2)对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型
function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');
cat1.color // 'white'
cat2.color // 'white'
//上面代码中，构造函数Animal的prototype属性，就是实例对象cat1和cat2的原型对象
//原型对象上添加一个color属性，结果，实例对象都共享了该属性

//原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有实例对象上。
Animal.prototype.color = 'yellow';
cat1.color // "yellow"
cat2.color // "yellow"


//如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。
cat1.color = 'black';

cat1.color // 'black'
cat2.color // 'yellow'
Animal.prototype.color // 'yellow';

// ===> 总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，
//而实例对象可以视作从原型对象衍生出来的子对象。

//概念：原型链
//(*)读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，
//如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。

//(*)寻找属性方式是：一级级向上，在整个原型链上寻找某个属性（即：如果寻找某个不存在的属性，将会遍历整个原型链）
var MyArray = function () {};
MyArray.prototype = new Array();
console.log('MyArray.prototype.constructor\'s name: ', MyArray.prototype.constructor.name);
MyArray.prototype.constructor = MyArray;
console.log('MyArray.prototype.constructor\'s name: ', MyArray.prototype.constructor.name);

console.log('Object.getPrototypeOf(MyArray.prototype)', Object.getPrototypeOf(MyArray.prototype));

// ---------------- 属性2 constructor 属性 -------------------

//(1)prototype对象有一个constructor属性 ------- 默认指向prototype对象所在的构造函数
function P() {}
P.prototype.constructor === P // true
//由于 constructor 属性定义在 prototype 对象上面，意味着可以被所有实例对象继承。
var p1 = new P();
console.log('p1.constructor === P: ', p1.constructor === P); //true
p1.constructor === P.prototype.constructor // true
// p1自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性
p1.hasOwnProperty('constructor') // false 


//(2)constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的
function F() {};
var f = new F();
f.constructor === F // true
f.constructor === RegExp // false

//(3)利用 constructor 从一个实例对象新建另一个实例
// constructor 可以 new
function Constr() {}
var x = new Constr();
var y = new x.constructor();
y instanceof Constr // true

//(4)如果修改了原型对象，一般会同时修改constructor属性
function Person(name) {
    this.name = name;
}

Person.prototype.constructor === Person // true

Person.prototype = {
    method: function () {}
};

Person.prototype.constructor === Person // false
Person.prototype.constructor === Object // true

//(5)(若不想修改原型对象)，只在原型对象上添加方法
Person.prototype.method = function () { console.log('change Person method') };

//(6)如果不能确定constructor属性是什么函数，还有一个办法：通过name属性，从实例得到构造函数的名称
function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"




// ---------------- 属性3 instanceof 属性 -------------------
//instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
function Vehicle() {}
var v = new Vehicle();
v instanceof Vehicle // true


//instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边
//构造函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
//isPrototypeOf()方法是 JavaScript 提供的原生方法，用于检查某个对象是否为另一个对象的原型


//由于任意对象（除了null）都是Object的实例，所以instanceof运算符可以判断一个值是否为非null的对象。
console.log('null type is: ', typeof null)


//instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上。
//有一种特殊情况，就是左边对象的原型链上，只有null对象。这时，instanceof判断会失真。
var obj = Object.create(null);
typeof obj // "object"
obj instanceof Object // false


//instanceof运算符的一个用处，是判断值的类型。
var x = [1, 2, 3];
var y = {};
x instanceof Array // true
y instanceof Object // true
//注意，instanceof运算符只能用于对象
var s = 'hello';
s instanceof String // false
//对于undefined和null，instanceof运算符总是返回false。
undefined instanceof Object // false
null instanceof Object // false



//终于到继承了
//------------------ 构造函数的继承 ----------------------------

//(1)第一步是在子类的构造函数中，调用父类的构造函数。
function Super(){
    this.echo = function(){
        console.log('父类 echo 方法')
    }
}

function Sub(value){
    Super.call(this);
    this.prop = value
}

//(2)第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型
//方式一
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = '...';
//上面代码中，Sub.prototype 是子类的原型，要将它赋值为 Object.create(Super.prototype)，
//而不是直接等于Super.prototype。否则后面两行会对 Sub.prototype 的操作，把父类的原型 Super.prototype 一起修改掉

//方式二
//另外一种写法是 Sub.prototype 等于一个父类实例
Sub.prototype = new Super();

//举例
//Shape构造函数
function Shape() {
    this.x = 0;
    this.y = 0;
}
  
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};
//Rectangle构造函数继承Shape
// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this); // 调用父类构造函数 ------------- 注意
}
// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
//测试结果
var rect = new Rectangle();
rect instanceof Rectangle;
rect instanceof Shape;

//有时只需要单个方法的继承，这时怎么实现？
/**
    ClassB.prototype.print = function() {
        ClassA.prototype.print.call(this);
        // some code
    }
*/



//---- 多重继承 ----
//JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象
//那么如何变通来实现？？？ ---- 实现方式：Mixin（混入）模式
function M1() {
    this.str = 'hello';
    this.method1 = function(){
        console.log('M1 ehco: ', this.str);
    }
}

function M2(){
    this.str = 'world';
    this.method2 = function(){
        console.log('M2 ehco: ', this.str);
    }
}

function Ob(){
    M1.call(this); // 调用父类构造函数
    M2.call(this); // 调用想要继承该类的构造函数
}

console.log('before change -- Ob.prototype name: ', Ob.prototype.constructor.name);
Ob.prototype = Object.create(M1.prototype)//继承 M1 ---- ps:这边继承的同时，也改变了 Ob.prototype.constructor
console.log('after change -- Ob.prototype name: ', Ob.prototype.constructor.name);

Object.assign(Ob.prototype, M2.prototype) // 继承链上加入 M2
// 指定构造函数 ----（ps:我认为这是还原构造函数）
Ob.prototype.constructor =  Ob
console.log('after restore -- Ob.prototype name: ', Ob.prototype.constructor.name);

var o = new Ob();
o.method1()
o.method2()

// ------- 模块 -------
// JavaScript 不是一种模块化编程语言，在传统做法中，是如何利用对象来实现模块编程的呢
// 详情查看在本目录下的 module.js 文件