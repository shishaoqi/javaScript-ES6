// https://wangdoc.com/javascript/types/general#typeof-%E8%BF%90%E7%AE%97%E7%AC%A6
/**
    JavaScript 有三种方法，可以确定一个值到底是什么类型。

    1. typeof运算符
    2. instanceof运算符
    3. Object.prototype.toString方法
 */



// 实际编程中，这个特点通常用在判断语句。
// 错误的写法
/**
    if (v) {
        // ...
    }
    // ReferenceError: v is not defined
 */
  
// 正确的写法
if (typeof v === "undefined") {
    // ...
}