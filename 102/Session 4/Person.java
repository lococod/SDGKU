public class Person{
   
   //attributes
    public String name;
    public int age;
    public int points;

//constructor
public Person(String name,int age,int points){

this.name=name;
this.age=age;    
this.points=points;
}





//methods
    public void sayHello(){
        System.out.println("Hello");
    }

    public void Printp(){
        System.out.println(this.name);
        System.out.println(this.age);
        System.out.println(this.points);
    }

    public int getAge(){
        return this.age;
    }

    public void setName(){
        this.name=name;

    }

    public String getName(){
        return this.name;
    }
}