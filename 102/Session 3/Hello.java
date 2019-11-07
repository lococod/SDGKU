import java.util.Scanner;

class Hello {
  public static void main(String[] args) {

    /*
     * String studentName; int age = 34; double salary = 78022.96; boolean student =
     * true; boolean old = false;
     * 
     * studentName = "Donald";
     */

    /*
     * int num1; int num2; int result; int results;
     */
    // String password = "admin";
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a Number: ");
    String p = sc.nextLine();
    System.out.println("Enter a Number: ");
    String q = sc.nextLine();

    int qq = Integer.parseInt(q);
    int pp = Integer.parseInt(p);

    if (pp > qq) {
      System.out.println("The first number is larger than the second: " + p);
    } else if (qq > pp) {
      System.out.println("The Second number is larger: " + q);
    } else {
      System.out.println("The numbers are equal.");
    }

    // num1 = 1;
    // num2 = 1;

    // result = num1 + num2;
    // results = result * num2;

    /*
     * if (p.equals(password)) { System.out.println("Access Granted"); } else{
     * System.out.println("Enter the Correct Password :("); }
     */

    /*
     * for (int i = 0; i <= 15; i += 3) { System.out.println(i); if
     * (studentName=="Donald") { System.out.println("This is Donald"); } else {
     * System.out.println("This is not 6"); }
     */
  }
}