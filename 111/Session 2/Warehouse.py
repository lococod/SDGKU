from Menu import print_menu, print_header
from Item import Item
import os


"""
register items
id
title
category
price
stock

"""
# methods delcarations

catalog = []

def clear():
    return os.system('cls')


def register_item():
    print_header('  Register NEw Item')
    title = input('Enter a Title: ')
    category = input('Enter a Category: ')
    price = float(input('Enter a Price: '))
    stock = int(input('Enter Inventory Amount: '))

    # validations

    # create object below
    new_item = Item()
    new_item.title = title
    new_item.category = category
    new_item.price = price
    new_item.stock = stock
    print(new_item.title)

    catalog.append(new_item)
    print("Item Created!")


def display_catalog():    
    print_header(' Catalog ')
    print('  Title              |   Category         | Price     | Stock       ')
    for item in catalog:
        print(item.title.ljust(20) + " | " + item.category.ljust(18) +  " | " + str(item.price).rjust(9) + " | " + str(item.stock).rjust(5))

    print('-' * 80)
    
    
def display_zero_stock():
    print_header(' Catalog ')
    print('Title                |   Category         | Price     | Stock       ')
    for item in catalog:
        if (item.stock == 0):
            print(item.title.ljust(20) + " | " + item.category.ljust(18) +  " | " + str(item.price).rjust(9) + " | " + str(item.stock).rjust(5))

    print('-' * 80)
    
    
    
    
    
    
    
# loop
valid_selection = ['1', '2', '3', '4', 'X', 'x']
selection = ''
while(selection != 'x'):
    clear()
    print_menu()
    selection = input('Select an Option: ')
    if(selection not in valid_selection):
        print("Not a valid selection")
        break

    if(selection == '1'):
        register_item()

    elif(selection == '2'):
        display_catalog()
    elif(selection == '3'):
        display_zero_stock()
        
        
        
    input('Press Enter to Continue')
