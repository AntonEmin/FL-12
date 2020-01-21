function Fighter(obj) {
  let name = obj.name,
      damage = obj.damage,
      health = obj.health,
      agility = obj.agility,
      strength = obj.strength,
      wins = 0,
      losses = 0;
  const MAX_Health = obj.health;
  return {        
    getName() {
      return name;
    },         
    getDamage() {
      return damage;
    },
    setHealth(newHealth) {
      health = newHealth;
    }, 
    getHealth() {
      return health;
    },         
    getAgility() {
      return agility;
    },         
    getStrength() {
      return strength;
    },
    setWins(newWins) {
      wins = newWins;
    },         
    getWins() {
      return wins;
    },
    setLosses(newLosses) {
      losses = newLosses;
    },        
    getLosses() {
      return losses;
    },
    getMaxHealth() {
      return MAX_Health;
    },
    logCombatHistory() {
      console.log(`Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`);
    },
    dealDamage (amountOfDamage) {
      const MIN_HEALTH_VALUE = 0; 
      this.setHealth(this.getHealth() - amountOfDamage);
      if (this.getHealth() < MIN_HEALTH_VALUE) {
      this.setHealth(MIN_HEALTH_VALUE)
      }
    },
    heal (amountOfHeal) {
      if (amountOfHeal > this.getMaxHealth()) {
        this.setHealth(this.getMaxHealth());
      } else {
        this.setHealth(this.getHealth() + amountOfHeal)
      }
    },
    addWin() {
      this.setWins(this.getWins() + 1);
    },
    addLoss() {
      this.setLosses(this.getLosses() + 1);
    },
    attack(enemy) {
      const MAX_CHANCE_OF_HIT = 100;
      const MIN_CHANCE_OF_HIT = 0;
      let chanceOfHit = enemy.getAgility() + enemy.getStrength();
      if (chanceOfHit > MAX_CHANCE_OF_HIT) {
        chanceOfHit = MAX_CHANCE_OF_HIT;
      }else if (chanceOfHit < MIN_CHANCE_OF_HIT) {
        chanceOfHit = MIN_CHANCE_OF_HIT
      }
      let hit = Math.floor(Math.random() * MAX_CHANCE_OF_HIT) + 1;
      if (hit <= chanceOfHit) {
        enemy.dealDamage(this.getDamage());
        console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemy.getName()}`);
      } else {
        console.log(`${this.getName()} attack missed`)
      }
    },
    isDead() {
      return this.getHealth() <= 0;
    }
  }
}
function battle (firstFighter, secondFighter) {    
  if (firstFighter.isDead()) {
    console.log(`${firstFighter.getName()} is dead and can't fight.`)
  } else if (secondFighter.isDead()) {
    console.log(`${secondFighter.getName()} is dead and can't fight.`)
  } else {
    while (!firstFighter.isDead() && !secondFighter.isDead()) {
      firstFighter.attack(secondFighter);
      if (!secondFighter.isDead()) { 
        secondFighter.attack(firstFighter);
      }
    }
    if (firstFighter.isDead()) {
      firstFighter.addLoss();
      console.log(`${secondFighter.getName()} has won!`);
      secondFighter.addWin();
    } else {
      firstFighter.addWin();
      console.log(`${firstFighter.getName()} has won!`);
      secondFighter.addLoss();        
    }
  }
}
