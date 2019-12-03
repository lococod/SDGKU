//object literal



const person1 = {
//attributes
name:'Donald',
age: 30,
height: 67,
job: true,
music:["Avenge Sevenfold","TeaParty","Chainsmokers"],
address:{
    street:"Bella",
    number: 9405
},
birthday:function(){
let date = new Date();
return date.getFullYear()-this.age;

}

}

console.log(person1.birthday());

const person2 = {
    //attributes
    name:'Marisa',
    age: 30,
    height: 65,
    job: true,
    music:["Avenge Sevenfold","TeaParty","Chainsmokers"],
    address:{
        street:"Bella",
        number: 9405
    }}

console.log(person2['name']);

//onbject constructor

class Person{
    constructor(name,age,height,job){
        this.name=name;
        this.age=age;
        this.height=height;
        this.job=job;

    }
}

const p1 = new Person ("Don",34,72,true);
console.log(p1);

class Task{
    constructor(name,priority,date){
this.name=name;
this.priority=priority;
this.date=date;

    }
}

const task1= new Task("Build it","high","12/2/2019");
const task2= new Task("Build it again ","low","12/2/2019");
console.log(task1);

const tasks = [task1,task2];

var text="";

for(i=0;i<tasks.length;i++)
{
    text += `<br> <h2>` + tasks[i].name + `</h2>`;
    console.log(text);
    
}
document.getElementById('tasks').innerHTML=text;



const client = {
    name:'John',
    type:'Premium',
    data:{
        location:{
            state:'MO',
            city:'St.Louis',
            country:'US'
        },
        account:{
            data: 2010,
            number: 1234436536
        },
}
}

console.log(client.data.location.city);

let {country} = client.data.location;
console.log(country);