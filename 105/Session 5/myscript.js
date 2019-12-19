// object literal
const salon = {
    name: "The Fashion Pets",
    phone: "867-5309",
    pets: [],
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

let { name, pets, phone, address: { street, number }, workingHours: { days, open, closing } } = salon;

document.querySelector(".info").innerHTML = `<h2> ${name}</h2>  <p> Address Information: ${number} ${street} </p> <p> Phone: (123) ${phone} </P><p> It is open ${days} from ${open} to ${closing}.</p>`;


document.querySelector("footer .info").innerHTML = `<h2> ${name}</h2>  <p> Address Information: ${number} ${street} </p> <p> Phone: (123) ${phone} </P><p> It is open ${days} from ${open} to ${closing}.</p>`;


var petId = 0;

class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.phoneContact = phoneContact;
        this.hunger = 10;
        this.happiness = 5;
        this.id = "pet" + petId;
        petId += 1;
    }
    ownerInfo = function () {
        console.log("Owner name:" + this.ownerName + " \n" + "Contact Number: " + this.phoneContact);
    }
    feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
        console.log("Feeding....")
    }
    status = function () {
        console.log("Hunger: " + this.hunger + "\n" + this.happiness);
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


function register() {
    const thePet = new Pet(textName.value, textAge.value, textBreed.value, textGender.value, textService.value, textOwnerName.value, textOwnerPhone.value);
    salon.pets.push(thePet);
    console.log(thePet);
    alert("Your Pet has been registered for the service.");
    clean();
    displayPet(thePet);
}

function clean() {
    textName.value = "";
    textAge.value = "";
    textGender.value = "";
    textService.value = "";
    textOwnerName.value = "";
    textOwnerPhone.value = "";
    textBreed.value = "";
}


function displayPet(aPet) {
    var tBody = document.getElementById("rowPets");
    var row = `<tr id="${aPet.id}"> <td>${aPet.name} </td>
<td>${aPet.age} </td> 
<td>${aPet.breed} </td> 
<td>${aPet.gender} </td> 
<td>${aPet.service} </td> 
<td>${aPet.ownerName} </td> 
<td>${aPet.phoneContact} </td> 
<td> <button onclick='remove("${aPet.id}");'> X </button>



</tr>`;

    tBody.innerHTML += row;
}


function remove(petId) {
    var tr = document.getElementById(petId);
    tr.remove();
    var indexDelete;
    for (i = 0; i < salon.pets.length; i++) {
        var selectedPet = salon.pets[i];
        if (selectedPet.id == petId) {
            indexDelete = i;
        }
    }
    salon.pets.splice(indexDelete, 1);

}

function search(petId) {

    // for (var j = 0; j < salon.pets.length; j++) {
    //     document.getElementById('pet'+j).setAttribute('class', 'x');
    // }

    var lowercasetext = document.getElementById('petSearch').value;
    var textSearch = lowercasetext.toLowerCase();
    var flag = false;
    for (var i = 0; i < salon.pets.length; i++) {
        var foundPet = salon.pets[i];
        if (foundPet.name.toLowerCase() == textSearch || foundPet.service.toLowerCase() == textSearch) {
            index = i;
            document.getElementById('pet' + index).setAttribute('class', 'found');
            document.getElementById("result").innerHTML = `<h3>${salon.pets[i].name} was found.</h3>`;
            console.log(i);
            flag = true;
        }
        if (flag == false) {
            document.getElementById("result").innerHTML = `<h3>${textSearch} was not found.</h3>`;
        }

    }

    document.getElementById("petSearch").value = "";
}