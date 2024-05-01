console.log('Boolean')
console.log('Boolean(false):', Boolean(false))
Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true

//顺便提一下，使用双重的否运算符（!）也可以将任意值转为对应的布尔值。
console.log('!!undefined:', !!undefined)
!!null // false
!!0 // false
!!'' // false
!!NaN // false

!!1 // true
!!'false' // true
!![] // true
!!{} // true
!!function(){} // true
!!/foo/ // true


//最后，对于一些特殊值，Boolean对象前面加不加new，会得到完全相反的结果，必须小心。
if (Boolean(false)) {
    console.log('true');
} // 无输出

if (new Boolean(false)) {
    console.log('true');
} // true

if (Boolean(null)) {
    console.log('true');
} // 无输出

if (new Boolean(null)) {
    console.log('true');
} // true