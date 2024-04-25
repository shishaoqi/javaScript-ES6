// 接口
(() => {
    interface IPerson {
        firstName: string
        lastName: string
    }

    function showFullName(person:IPerson) {
        return person.firstName + '  ' + person.lastName
    }

    const person = {
        firstName:'shi',
        lastName:'shao'
    }

    console.log(showFullName(person))
})()