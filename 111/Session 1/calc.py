#method at the top
def separator():
    print(40 * '-')
def menu():
    print(2 * '\n')
    separator()
    print(' Welcome to PyCalc')
    separator()
    print('[1] - Add')
    print('[2] - Subtract')
    print('[3] - Multiply')
    print('[4] - Divide')
    print('[X] - Exit')
    
        
# add
def add(x, y):
   return x + y

# subtract
def subtract(x, y):
   return x - y

# multiple
def multiply(x, y):
   return x * y

# divide
def divide(x, y):
   return x / y



selection = ''
while (selection != 'x'):
    menu()
    selection = input("Enter choice: ")
    if(selection != 'x'):
        x = float(input("Enter first number: "))
        y = float(input("Enter second number: "))
        
        if(selection  == '1'):
            print(x,"+",y,"=", add(x,y))
            
        elif selection == '2':
            print(x,"-",y,"=", subtract(x,y))

        elif selection == '3':
            print(x,"*",y,"=", multiply(x,y))

        elif selection == '4':
            print(x,"/",y,"=", divide(x,y))