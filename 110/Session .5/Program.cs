using System;

namespace Session_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Test();
        }
        static void Test() {
            Console.WriteLine("This is a Method");
            Console.WriteLine("This is method 2 ");

            // Variables and Data types

            string firstName = "Donald"            ;
            Console.WriteLine("My name is "+ firstName);

            int age = 34;
            float price = 12.34f;
            bool isThisCrazy = true;

            Console.WriteLine("My age is "+ age);

            //if
            if(isThisCrazy)
            {
                Console.WriteLine("Yes it is");
            }
            else{
                Console.WriteLine("No it is not");
            }

            //loops
            for(int i=0; i < 10; i++){
                Console.WriteLine("Iteration: "+ i);
            }
        }
    }
}
