(function(){
    //(1) Object.getPrototypeOf()
    var F = function(){}
    var f = new F();
    console.info('Object.getPrototypeOf(f) === F.prototype', Object.getPrototypeOf(f) === F.prototype);

    //下面是几种特殊对象的原型
    // 空对象的原型是 Object.prototype
    Object.getPrototypeOf({}) === Object.prototype // true

    // Object.prototype 的原型是 null
    Object.getPrototypeOf(Object.prototype) === null // true

    // 函数的原型是 Function.prototype
    function f() {}
    Object.getPrototypeOf(f) === Function.prototype // true



    //(2) Object.setPrototypeOf()
    // Object.setPrototypeOf 方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象
    var a = {};
    var b = {x: 1};
    Object.setPrototypeOf(a, b);

    Object.getPrototypeOf(a) === b // true
    a.x // 1
    //上面代码中，Object.setPrototypeOf方法将对象a的原型，设置为对象b，因此a可以共享b的属性
    // new命令可以使用Object.setPrototypeOf方法模拟???
    // https://wangdoc.com/javascript/oop/object#objectsetprototypeof



    //(3) Object.create()  --- 从一个实例对象，生成另一个实例对象
    // 此方法接受一个对象作为参数，然后以它为原型，返回一个实例对象
    
    // 原型对象
    var A = {
        print: function () {
            console.log('hello');
        }
    };
    
    // 实例对象
    var B = Object.create(A);
    
    Object.getPrototypeOf(B) === A // true
    B.print() // hello
    B.print === A.print // true

    //如果想要生成一个不继承任何属性（比如没有toString()和valueOf()方法）的对象，可以将Object.create()的参数设为null。
    var obj = Object.create(null);
    //obj.valueOf() // TypeError: Object [object Object] has no method 'valueOf'


    //Object.create()方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。
    var obj1 = { p: 1 };
    var obj2 = Object.create(obj1);

    obj1.p = 2;
    obj2.p // 2
    //上面代码中，修改对象原型obj1会影响到实例对象obj2

    //*注： 除了对象的原型，Object.create()方法还可以接受第二个参数。
    //该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性


    //(4) Object.prototype.isPrototypeOf()



    //Object.prototype.hasOwnProperty()
    //对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。



    //对象的拷贝
})()