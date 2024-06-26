// JavaScript 程序的执行单位为行（line），也就是一行一行地执行。
// 一般情况下，每一行就是一个语句。

// 语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。
var exp = 1 + 3; // 1 + 3 叫做：表达式（expression）
// 语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；
// 后者则是为了得到返回值，一定会返回一个值。


// 语句以分号结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。
var exp2 = 1 + 3; var b = 'abc';
console.log('statement exp2 = ' + exp2)

// 表达式不需要分号结尾。一旦在表达式后面添加分号，则 JavaScript 引擎
// 就将表达式视为语句，这样会产生一些没有任何意义的语句。
1 + 3;
'abc'
// 上面两行语句只是单纯地产生一个值，并没有任何实际的意义。

