// 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动
// 转为布尔值。转换规则是除了下面六个值被转为false，
// 其他值都视为true，如：空数组（[]）和空对象（{}）
/**
    1. undefined
    2. null
    3. false
    4. 0
    5. NaN
    6. ""或''（空字符串）
 */
console.log(Boolean(NaN))

if ('') { //JavaScript 自动将空字符串，转为布尔值false
    console.log('true');
}
// 没有任何输出