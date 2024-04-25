// 接口
(() => {
    function showFullName(person) {
        return person.firstName + '  ' + person.lastName;
    }
    const person = {
        firstName: 'shi',
        lastName: 'shao'
    };
    console.log(showFullName(person));
})();
