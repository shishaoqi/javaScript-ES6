(()=>{
    //数组
    let list1: number[] = [1, 2, 3]
    // 第二种方式是使用数组泛型，Array<元素类型>
    let list2: Array<number> = [1, 2, 3]

    console.log('array1: ' + list1)
    console.log('array1=2: ' + list2)

    //元组 Tuple
    let t1: [string, number]
    t1 = ['hello', 1] //Ok
    //t1 = [2, 'world']//Error

})()