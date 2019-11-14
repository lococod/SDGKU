public class Game {

  public static void main(String[] args) {
    Character toad = new Character("toad", 67, 30, 300, 180, 20, 87, 6);
    Character mario = new Character("mario", 75, 30, 300, 180, 25, 37, 6);
    Character luigi = new Character("luigi", 72, 30, 300, 180, 40, 67, 6);

    /*
     * System.out.println(toad.getName()+"\n"+toad.getHealth()+"\n"+toad.getMana()+
     * "\n"+toad.getAttackPoints()+"\n"+toad.getDefensePoints());
     */

    /*
     * toad.display(); mario.display(); luigi.display();
     */

    toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);   
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);
   toad.attack(mario);
   luigi.attack(toad);
   mario.attack(luigi);
   luigi.attack(toad);
   toad.attack(luigi);

   

  }

}