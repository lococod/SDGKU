class Character {
    constructor(name, energy, id, lives) {
        this.name = name;
        this.energy = energy;
        this.id = id;
        this.lives = lives;
    }

    display = function () {
        document.getElementById(this.id).innerHTML = `<p> Name: ${this.name} </p> 
<p> Energy: ${this.energy}</p>
<p> Lives: ${this.lives}</p>`;

    }
    attack = function (opponent) {
        let damage = (Math.floor(Math.random() * ((20 - 1) + 1) + 1));
        let newEnergy = opponent.energy - damage;
        opponent.energy = newEnergy;
        console.log(opponent);
        opponent.display();
        document.getElementById("console").innerHTML = `<p>${this.name} attacked  ${opponent.name}  and hits for ${damage} damage.`;

    }
}

const character1 = new Character("Mario", 100, "c1", 4);
const character2 = new Character("Yoshi", 100, "c2", 4);

character1.display();
character2.display();