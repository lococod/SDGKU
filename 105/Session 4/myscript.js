// object literal
const salon = {
    name: "The Fashion Pets",
    phone: "867-5309",
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

document.getElementById("info").innerHTML = `<h2> ${name}</h2>  <p> Address Information: ${number} ${street} </p> <p> Phone: (123) ${phone} </P><p> It is open ${days} from ${open} to ${closing}.</p>`;

document.getElementById("info2").innerHTML = `<h2> ${name}</h2>  <p> Address Information: ${number} ${street} </p> <p> Phone: (123) ${phone} </P><p> It is open ${days} from ${open} to ${closing}.</p>`;

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

//document.getElementById("pets").innerHTML=text;
  

// const ex  = document.getElementsByTagName('p');
// for(var i=0;i<ex.length;i++){
// ex[i].setAttribute('class','example');
// }


// var heading3= document.createElement('h3');
// console.log(heading3);
// //var text = document.createTextNode("my first dom exercise");
// console.log(text);
// //heading3.appendChild(text);
// console.log(heading3);

// //document.getElementById('example').appendChild(heading3);

// // heading3.cloneNode(true);
// // var col1 = document.getElementById('col1');
// // col1.insertBefore(heading3);

// document.querySelector('.lead');

// //var deleted = document.querySelector("header h1");
// //deleted.remove();