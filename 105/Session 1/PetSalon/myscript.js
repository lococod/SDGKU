// object literal
const salon = {
    name: "The Fashion Pets",
    phone: "8675309",
    pets:[],
    address: {
        street: "Avenue Blvd",
        number: "123-g"
    },
    workingHours: {
        days: "Mon-Fri",
        open: "9:00am",
        closing: "8:00pm"
    },
}

//object deconstructing

let { name,pets, phone, address: { street, number }, workingHours: { days, open, closing } } = salon;

document.getElementById("col1").innerHTML = `<h2 class="h2">${name}</h2> <p class="lead"> Phone: ${phone}</P>`;

document.getElementById("col2").innerHTML = `<p class="lead">Address Information: </p> <p class="lead> ${number} ${street}</p>`;

document.getElementById("col3").innerHTML = `<p class="lead"> It is open ${days} from ${open} to ${closing}.`;

class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact) {
    this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.phoneContact = phoneContact;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function(){
        console.log("Owner name:"+this.ownerName + " \n" + "Contact Number: " + this.phoneContact);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding....")
    }
    status = function(){
        console.log("Hunger: "+this.hunger +"\n" + this.happiness);
    }
  
}

const pet1 = new Pet("Maggie",3,"Corgi","Female","Wash","Donald","8675309");
const pet2 = new Pet("Lulu",12,"Chihuahua","Female","Nail Cut","Donald","8675309");
const pet3 = new Pet("Domino",8,"Akita","Female","De Shed","Donald","8675309");

console.log(pet1);
// console.log(pet1.status());
// console.log(pet1.feed());
// console.log(pet1.status());

console.log(pet2);
// console.log(pet2.ownerInfo());
// console.log(pet2.status());
// console.log(pet2.feed());
// console.log(pet2.status());

console.log(pet3);
// console.log(pet3.ownerInfo());
// console.log(pet3.status());
// console.log(pet3.feed());
// console.log(pet3.status());

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
console.log(salon.pets);

//display in alert message the number of pets

// numberOfPets = function(){
//     alert("we have " + pets.length + " pets in the store.");     
// }

// numberOfPets();

var text=" ";
for (var i=0;i<salon.pets.length;i++){
    //console.log(salon.pets[i])
text += `Name: ${salon.pets[i].name}, Age: ${salon.pets[i].age}, Owner: ${salon.pets[i].ownerName} <br>`;  

}

document.getElementById("pets").innerHTML=text;
  