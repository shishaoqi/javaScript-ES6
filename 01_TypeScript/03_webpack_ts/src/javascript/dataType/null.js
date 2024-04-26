// 区别是这样的：null是一个表示“空”的对象，转为数值时为0；
// undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。

// null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，
// 这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错
// 误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN

// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined