(()=>{
    class Greeter {
        // 声明属性
        message: string

        //构造方法
        constructor(message: string){
            this.message = message
        }

        greet():string{
            return 'hello ' + this.message
        }
    }

    const greeter = new Greeter('world')
    console.log('print function greet: ===>  '+greeter.greet)
    console.log(greeter.greet())

    //继承
    class Animal {
        run (distance: number) {
            console.log(`Animal run ${distance}-m`)
        }
    }

    class Dog extends Animal{
        cry(){
            console.log('wang! wang!')
        }
    }
    const dog = new Dog()
    dog.cry()
    dog.run(10)
})()