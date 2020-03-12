from Menu import print_menu
from Item import Item


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


def register_item():
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
    for item in catalog:
        print(item.title + " | " + item.category +  " | " + str(item.price) + " | " + str(item.stock) + " | ")


# loop
valid_selection = ['1', '2', '3', '4', 'X', 'x']
selection = ''
while(selection != 'x'):
    print_menu()
    selection = input('Select an Option: ')
    if(selection not in valid_selection):
        print("Not a valid selection")
        break

    if(selection == '1'):
        register_item()

    elif(selection == '2'):
        display_catalog()
