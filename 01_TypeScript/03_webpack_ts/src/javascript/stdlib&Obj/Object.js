//最外围是一个：立即执行函数
(function(){
    console.info('------ Object')
})();

//JavaScript 原生提供 Object 对象



// -----------
// Object对象的原生方法分成两类：Object本身的方法 与 Object的实例方法

//（1）Object对象本身的方法
Object.print = function (o) { console.log(o) };

//（2）Object的实例方法
Object.prototype.print = function () {
    console.log(this);
};

var obj = new Object();
obj.print() // Object
//Object.prototype定义了一个print方法，然后生成一个Object的实例obj。
//obj直接继承了Object.prototype的属性和方法，可以直接使用obj.print调用print方法。
//也就是说，obj对象的print方法实质上就是调用Object.prototype.print方法。

//凡是定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享就可以了。


// ----------
// Object()
// Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象

// 1) 如果参数为空（或者为undefined和null），Object()返回一个空对象

// 2) 如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例

// 3) 如果Object方法的参数是一个对象，它总是返回该对象，即不用转换
// 利用这一点，可以写一个判断变量是否为对象的函数

// ----------
// Object 构造函数
// Object不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用new命令。

// 1) Object构造函数的首要用途，是直接通过它来生成新对象
var obj = new Object(); // 注意：此写法，与字面量的写法var obj = {} 是等价的

// 2)  使用时，可以接受一个参数，
// 如果该参数是一个对象，则直接返回这个对象；
// 如果是一个原始类型的值，则返回该值对应的包装对象
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true


// ---------------------------------
// Object 的静态方法
// 所谓“静态方法”，是指部署在Object对象自身的方法

// 1) Object.keys()，Object.getOwnPropertyNames() 
// Object.keys 方法和Object.getOwnPropertyNames 方法都用来遍历对象的属性
// 对于一般的对象来说，Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。

// 2) 其他方法



// ---------------------------------
// Object 的实例方法
// 除了静态方法，还有不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法
// Object实例对象的方法，主要有以下六个:

// 1) Object.prototype.valueOf()：返回当前对象对应的值
// 2) Object.prototype.toString()：返回当前对象对应的字符串形式
// 3) Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式
// 4) Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
// 5) Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型
// 6) Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举