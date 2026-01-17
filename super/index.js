class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at a speed of ${speed} mph`);
    }

}   

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Bird extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
rabbit.run();

const bird = new Bird("bird", 3, 50);
bird.fly();


    