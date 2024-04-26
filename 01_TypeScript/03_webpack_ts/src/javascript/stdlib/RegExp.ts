(()=>{
    // 正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，
    // 常常用来按照“给定模式”匹配文本。

    // 新建正则表达式
    // 一种是使用字面量，以斜杠表示开始和结束
    var regex = /xyz/
    // 另一种是使用 RegExp 构造函数
    var regex2 = new RegExp('xyz')
    // RegExp构造函数还可以接受第二个参数，表示修饰符
    var regex3 = new RegExp('xyz', 'i'); // 等价 var regex = /xyz/i;


    // 字符串的实例方法: match()、search()、replace()、split()


    // 正则表达式如果不加g修饰符，
    // 就替换第一个匹配成功的值，否则替换所有匹配成功的值。
    'aaa'.replace('a', 'b') // "baa"
    'aaa'.replace(/a/, 'b') // "baa"
    'aaa'.replace(/a/g, 'b') // "bbb"

    
})()