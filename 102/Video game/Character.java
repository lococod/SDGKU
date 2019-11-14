public class Character{

private  String name;
private double height;
private int age;
private int energy;
private int mana;
private int attackPoints;
private int defensePoints;

//constructor
public Character(String name,int height,int age, int energy,int mana,int attackPoints,int defensePoints){
this.name=name;
this.height=height;
this.age=age;
this.energy=energy;
this.mana=mana;
this.attackPoints=attackPoints;
this.defensePoints=defensePoints;
}
//getters
public String getName(){
  return this.name;
}
public int getHeight(){
  return this.height;
}
public int getAge(){
  return this.age;
}
public int getEnergy(){
  return this.energy;
}

public int getMana(){
  return this.mana;
}

public int getAttackPoints(){
  return this.attackPoints;
}

public int getDefensePoints(){
  return this.defensePoints;
}
//method


public void attack(Character opponent){


//int newEnergy = opponent.energy-this.attackPoints;
int newMana = this.mana-5;
int damage = (15+(this.attackPoints/(this.attackPoints-opponent.defensePoints)));
int newEnergy = opponent.energy-damage;

opponent.mana=newMana;
opponent.energy=newEnergy;
opponent.display();

System.out.println(this.name +" is attacking "+opponent.name+" and hits for "+ damage);




}
public void display(){
  System.out.println("-----------------------------------------");
  System.out.println("Name: "+this.name);
  System.out.println("Energy:  "+this.energy);
  System.out.println("Mana: "+this.mana);
  System.out.println("Age: "+this.age);
  System.out.println("Attack: "+this.attackPoints);
  System.out.println("Defense: "+this.defensePoints);


}
  
}
