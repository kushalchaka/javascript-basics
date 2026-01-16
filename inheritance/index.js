class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Bird extends Animal {
    name = "bird";
     fly() {
        console.log(`This ${this.name} is flying`);
    }
}
class Shark extends Animal {
    name = "shark";
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const bird = new Bird();
const shark = new Shark();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(bird.alive);
bird.eat();
bird.sleep();
bird.fly();

console.log(shark.alive);
shark.eat();
shark.sleep();
shark.swim();