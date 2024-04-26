// 定义：字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
'abc'
"abc"

// 单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。

'key = "value"'
"It's a long journey"


// 如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

var longString = 'Long \
long \
long \
string';

console.log(longString);


// 字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返
// 回某个位置的字符（位置编号从0开始）。

var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"


// JavaScript 原生提供两个 Base64 相关的方法。
/**
    btoa()：任意值转为 Base64 编码
    atob()：Base64 编码转为原来的值
 */