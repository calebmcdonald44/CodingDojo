class Ninja {
    constructor(name, health=90, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength= strength
    }

    sayName() {
        console.log("This ninja's name is:", this.name)
    }

    showStats() {
        console.log("Here is the selected ninja's stats:", this)
    }

    drinkSake() {
        this.health += 10
        console.log("Yum!", this.name, "'s health is now", this.health)
    }
}
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom() {
        console.log("Sensei", this.name, "says: Comparison is the thief of joy.")
        super.drinkSake()
    }
}

let john = new Sensei("John")
john.sayName()
john.showStats()
john.drinkSake()
john.showStats()
john.speakWisdom()
