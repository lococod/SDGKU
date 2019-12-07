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
        if (opponent.energy <= 0) {
            document.getElementById(opponent.id).innerHTML = `<p> You have died. </P`;
            document.getElementById("console").innerHTML = `<p>${this.name} has won. Game Over for ${opponent.name}`;
           }
        else {
            document.getElementById("console").innerHTML = `<p>${this.name} attacked  ${opponent.name}  and hits for ${damage} damage.`;

        }
    }
    attackWItem = function (opponent,item) {
        let damage = item.iHealth
        let newEnergy = opponent.energy - damage;
        opponent.energy = newEnergy;
        console.log(opponent);
        opponent.display();
        if (opponent.energy <= 0) {
            document.getElementById(opponent.id).innerHTML = `<p> You have died. </P`;
            document.getElementById("console").innerHTML = `<p>${this.name} has won. Game Over for ${opponent.name}`;
           }
        else {
            document.getElementById("console").innerHTML = `<p>${this.name} attacked  ${opponent.name}  with a ${item.iName} ${item.img} and hits for ${damage} damage.`;

        }
    }


}

const character1 = new Character("Mario", 100, "c1", 1);
const character2 = new Character("Yoshi", 100, "c2", 1);

character1.display();
character2.display();

class item {
    constructor(iName, iHealth, img) {
        this.iName = iName;
        this.iHealth = iHealth;
        this.img = img;
    }

}
const item1 = new item("Acorn", 25, '<img class="imgItem" src="img/acorn.png">');
const item2 = new item("Stamp", 10, '<img class="imgItem" src="img/stamp.jpg">');
const item3 = new item("Mushroom", 5,'<img class="imgItem" src="img/mushroom.png">');

const items = [item1,item2,item3];
function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection]
    
}

const reset = function(){
   }
