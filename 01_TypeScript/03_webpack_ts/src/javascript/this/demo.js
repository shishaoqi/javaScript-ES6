(()=>{
    var A = {
        name: '张三',
        describe: function() {
            return '姓名：' + this.name
        }
    }
    console.log(A.describe())

    // ？？？
    var name = '李四';
    var f = A.describe;
    console.log(f());

    var B = {
        name: '李四'
    };
    B.describe = A.describe;
    console.log(B.describe())
})()