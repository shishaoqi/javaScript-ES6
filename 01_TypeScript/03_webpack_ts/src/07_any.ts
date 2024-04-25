(()=>{
    // any 运用于某个变量我们不确定会是什么类型，因为该变量的值来自
    // 动态的内容，比如来自用户输入或第三方代码库
    let notSure: any = 4
    notSure = 'maybe a string'
    notSure = false // 也可以是个 boolean

    // 多态的可能
})()