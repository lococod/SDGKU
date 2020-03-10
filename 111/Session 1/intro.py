print('Hello World')

name = 'Donald'
last_name = "Lococo"
age = 99
found = False
average = 19.99

print(name)
print(last_name)
print(age)
print(found)
print(average)
print(21 + 21)
print(2 * 2)
print(age - 1)
print(33 / 11)
print(10 % 3)

def test():
    print("inside the fn")
    print("this one too")
    print("outside the function")
    
    
def separator():
    print('----------------------------------------')
    
    
test()

separator()
print(name + last_name)
print(10 * name)
print(name +str(23))


if(age < 90):
    print('You are young')
elif(age == 90):
    print('You are borderline')
else:
    print('Sorry, you are old')