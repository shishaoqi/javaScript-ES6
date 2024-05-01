// 任何类型的数据，都可以放入数组。
var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
];

arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}


//数组的本质
//本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。
console.log('typeof [1, 2, 3]: ', typeof [1, 2, 3]) // "object"


var arr = ['a', 'b', 'c'];
console.log('Object.keys(arr): ', Object.keys(arr))
// ["0", "1", "2"]
//上面代码中，Object.keys方法返回数组的所有键名。可以看到数组的键名就是整数 0、1、2。
//由于数组成员的键名是固定的（默认总是0、1、2...），因此数组不用为每个元素指定键名，
//而对象的每个成员都必须指定键名。JavaScript 语言规定，对象的键名一律为字符串，
//所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。


//对象有两种读取成员的方法：点结构（object.key）和方括号结构（object[key]）。--- 但是，对于数值的键名，不能使用点结构。
var arr = [1, 2, 3];
//arr.0 // SyntaxError



//length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到length设置的值。
var arr = [ 'a', 'b', 'c' ];
arr.length // 3

arr.length = 2;
arr // ["a", "b"]


// in 运算符
//检查某个键名是否存在的运算符in，适用于对象，也适用于数组。
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false


// 遍历数组
// for...in


// while


// forEach
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});
// red
// green
// blue


//类似数组的对象
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
  
obj[0] // 'a'
obj[1] // 'b'
obj.length // 3
//obj.push('d') // TypeError: obj.push is not a function
//如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。


//“类似数组的对象”的根本特征，就是具有length属性。只要有length属性，
//就可以认为这个对象类似于数组。但是有一个问题，这种length属性不是动态值，不会随着成员的变化而变化。


//典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 字符串
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false



//数组的slice方法可以将“类似数组的对象”变成真正的数组。
var arr = Array.prototype.slice.call(arrayLike);