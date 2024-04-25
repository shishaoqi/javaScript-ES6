(()=>{
    enum Color {
        Red,
        Green,
        Blue
    }

    enum DirectionT {
        North,
        East,
        South,
        West
    }

    enum Month {
        January = 1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }

    //枚举类型提供的一个便利是：你可以由枚举的值得到它的名字
    let colorName: string = Color[2]
    console.log('color: ' + colorName)

    let month: String = Month[1]
    console.log('month: ' + month)
})()