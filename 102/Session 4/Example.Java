public class Example {

    public static void main(String[] args) {

        Person student1 = new Person("Donald",30,50);
        Person student2 = new Person("Test",34,99);
        Person student3 = new Person("Marisa",34,99);
        Animal animal1 = new Animal("Nala","cat");
        Animal animal2 = new Animal ("Beast","dog");
        Animal animal3 = new Animal ("Fang","crocodile");

       // student1.PrintP();
       // student2.PrintP();
        animal1.attacks(student1.getName());
        animal1.attacks(student2.getName());
        animal2.attacks(student1.getName());
        animal2.attacks(student2.getName());
        animal3.attacks(student3.getName());
        //student1.sayHello(student2.getName());
      
        
    }
}