class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname) {
        if (typeof newfirstname === "string" && newfirstname.length > 0) {
            this._firstname = newfirstname;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastname(newlastname) {
        if (typeof newlastname === "string" && newlastname.length > 0) {
            this._lastname= newlastname;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" & newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get fullname() {
        return this._firstname + " " + this._lastname;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("SpongeBob", "SquarePants", 30);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);