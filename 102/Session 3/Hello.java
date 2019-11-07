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
    String password = "admin";
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a Password: ");
    String p = sc.nextLine();

    // num1 = 1;
    // num2 = 1;

    // result = num1 + num2;
    // results = result * num2;

    
    if (p.equals(password)) {
      System.out.println("Access Granted");
    }
    else{
      System.out.println("Enter the Correct Password :(");
    }
  }
  /*
   * for (int i = 0; i <= 15; i += 3) { System.out.println(i); if
   * (studentName=="Donald") { System.out.println("This is Donald"); } else {
   * System.out.println("This is not 6"); }
   */
}
