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


// salon.pets.push(pet1);
// salon.pets.push(pet2);
// salon.pets.push(pet3);
// console.log(salon.pets);





var textName = document.getElementById('petName');
var textAge = document.getElementById('petAge');
var textGender = document.getElementById('petGender');
var textService = document.getElementById('petService');
var textOwnerName = document.getElementById('petOwner');
var textOwnerPhone = document.getElementById('petPhone');
var textBreed = document.getElementById('petBreed');

function register(){
    const thePet = new Pet(textName.value,textAge.value,textGender.value,textService.value,textOwnerName.value,textOwnerPhone.value,textBreed.value);
}

