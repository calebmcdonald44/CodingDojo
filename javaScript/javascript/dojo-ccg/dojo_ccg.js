class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
        console.log(this.name, "has entered the battlefield!")
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }
    attack(target) {
        console.log(this.name, "attacks", target.name, "!")
        let newRes = (target.res - this.power)
        if(newRes > 0){
            target.res = newRes
            console.log(`${target.name}'s resilience is now ${target.res}.`)
        }
        else {
            target.res = 0
            console.log(`${target.name} has fainted!`)
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, amount) {
        super(name, cost)
        this.stat = stat
        this.amount = amount
    }
    applyEffect(target) {
        let posNeg = null
        console.log(`${this.name} is being used on ${target.name}!`)
        if(this.amount > 0){
            posNeg = 'increased'
        }
        else {
            posNeg = 'decreased'
        }
        if(this.stat === 'res') {
            target.res += this.amount
            console.log(`${target.name}'s resilience ${posNeg} by ${Math.abs(this.amount)}!`)
            console.log(`${target.name}'s resilience is now ${target.res}.`)
        }
        else if(this.stat === 'power') {
            target.power += this.amount
            console.log(`${target.name}'s power ${posNeg} by ${Math.abs(this.amount)}!`)
            console.log(`${target.name}'s power is now ${target.power}.`)
        }
        else{
            console.log('error')
        }
    }
}

//Creating instance of a unit called Red Belt Ninja
redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)

//Creating instance of an effect called Hard Algorithm and playing it on Red Belt Ninja
hardAlgorithm = new Effect("Hard Algorithm", 2, "res", 3)
hardAlgorithm.applyEffect(redBeltNinja)

//Creating instance of a unit called Black Belt Ninja
blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

//Creating an instance of an effect Unhandled Promise Rejection and playing it on Red Belt Ninja
unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "res", -2)
unhandledPromiseRejection.applyEffect(redBeltNinja)

//Creating an instance of an effect Pair Programming and playing it on Red Belt Ninja
pairProgramming = new Effect("Pair Programming", 3, "power", 2)
pairProgramming.applyEffect(redBeltNinja)

//Red Belt Ninja attacks Black Belt Ninja
redBeltNinja.attack(blackBeltNinja)

//Still need to created proper console logs if an effect brings a unit's resilience to 0 or below



