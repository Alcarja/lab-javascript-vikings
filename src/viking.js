/*
// Soldier Classes are templates to create objects
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health -= dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}


// Saxon
    class Saxon extends Soldier {
        receiveDamage(damage) {
            this.health -= damage;
            if(this.health > 0) {
                return `A Saxon has received ${damage} points of damage`;
            } else {
                return `A Saxon has died in combat`;
            }
        }
    }


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingName) {
        this.vikingArmy.push(vikingName);
    };
    addSaxon(saxonName) { 
        this.saxonArmy.push(saxonName)
    };

    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomSaxon.receiveDamage(randomViking.strength);
            if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
            } return result;
        };
    
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength);
            if(randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking))
            } return result;
        };
    

    showStatus() {
        if(this.saxonArmy.length === 0) {return `Vikings have won the war of the century!`}
        else if(this.vikingArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
        else {return `Vikings and Saxons are still in the thick of battle.`}  
    };

 }
 */



 //SECOND TRY//

 class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
 } //Soldier

 class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {return `${this.name} has received ${damage} points of damage`}
      else {return `${this.name} has died in act of combat`}
    }

    battleCry() {
        return `Odin Owns You All!`
    }
 } //Viking
 
 class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {return `A Saxon has died in combat`}
    }
 } //Saxon

 class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingName) {
        this.vikingArmy.push(vikingName);
    };
    addSaxon(saxonName) {
        this.saxonArmy.push(saxonName);
    };
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
        } return result;
    };
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if(randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking))
        } return result;
    };
    
    showStatus() {
        if(this.saxonArmy.length === 0) {return `Vikings have won the war of the century!`}
        else if(this.vikingArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
        else {return `Vikings and Saxons are still in the thick of battle.`}  
    };

 }

//JUEGO COMPLETO//
const WorldwarIII = new War();

const viking1 = new Viking("Jaime", 100, 80);
const viking2 = new Viking("Brian", 100, 60);
const viking3 = new Viking("Angel", 100, 40);

WorldwarIII.addViking(viking1);
WorldwarIII.addViking(viking2);
WorldwarIII.addViking(viking3);

const saxon1 = new Saxon(100, 100);
const saxon2 = new Saxon(100, 35);
const saxon3 = new Saxon(100, 35);

WorldwarIII.addSaxon(saxon1);
WorldwarIII.addSaxon(saxon2);
WorldwarIII.addSaxon(saxon3);

while (!(WorldwarIII.vikingArmy.length === 0) || !(WorldwarIII.saxonArmy.length === 0)) {
  const vikingResult = WorldwarIII.vikingAttack();
  const saxonResult = WorldwarIII.saxonAttack();
  const battleResult = WorldwarIII.showStatus();

  console.log(`Viking attack result: ${vikingResult}`);
  console.log(`Saxon attack result: ${saxonResult}`);
  console.log(battleResult);
}