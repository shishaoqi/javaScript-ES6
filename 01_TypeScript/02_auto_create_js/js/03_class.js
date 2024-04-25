(() => {
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + this.fullName;
        }
    }
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    let user = new User('shi', 'shao--03_class');
    console.log(greeter(user));
})();
