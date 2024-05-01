//作为构造函数时，它用于生成值为数值的对象
var n = new Number(1);
typeof n // "object"


//作为工具函数时，它可以将任何类型的值转为数值
Number(true) // 1



//Number对象拥有以下一些静态属性（即直接定义在Number对象上的属性，而不是定义在实例上的属性）。



//Number.prototype.toString()
(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"
//上面代码中，10一定要放在括号里，这样表明后面的点表示调用对象属性。如果不加括号，这个点会被 JavaScript 引擎解释成小数点，从而报错。
10.toString(2)
// SyntaxError: Unexpected token ILLEGAL



//toFixed()方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。


//toExponential方法用于将一个数转为科学计数法形式



//注意，数值的自定义方法，只能定义在它的原型对象Number.prototype上面，数值本身是无法自定义属性的。
var n = 1;
n.x = 1;
n.x // undefined
//上面代码中，n是一个原始类型的数值。直接在它上面新增一个属性x，不会报错，但毫无作用，总是返回undefined。
//这是因为一旦被调用属性，n就自动转为Number的实例对象，调用结束后，该对象自动销毁。所以，下一次调用n的属性时，实际取到的是另一个对象，属性x当然就读不出来。