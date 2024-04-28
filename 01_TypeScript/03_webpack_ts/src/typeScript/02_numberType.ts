(()=>{
    //let声明的变量只在它所在的代码块有效
    {
        let a1: number = 10 //十进制
    }
   
    let binary: number = 0b101 //二进制
    let obt: number = 0o12 //八进制
    let hex: number = 0xa //十六进制

    //console.log('十进制： '+ a1) // Can't find name 'a1'
    console.log('八进制： '+ obt)
    console.log('十六进制：' + hex)
})()