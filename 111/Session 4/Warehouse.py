from Menu import print_menu, print_header
from Item import Item
import os
import pickle
import math


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
id_count = 1
data_file = 'catalog.data'

def clear():
    return os.system('cls')


def register_item():
    global id_count 
    print_header('  Register New Item')
    title = input('Enter a Title: ')
    category = input('Enter a Category: ')
    price = float(input('Enter a Price: '))
    stock = int(input('Enter Inventory Amount: '))

    # validations

    # create object below
    new_item = Item()
    new_item.id = id_count
    new_item.title = title
    new_item.category = category
    new_item.price = price
    new_item.stock = stock
    print(new_item.title)

    id_count += 1
    catalog.append(new_item)
    print("Item Created!")


def update_stock():
    display_catalog()
    selected = int(input(' Please select the ID to update Stock: '))

    found = False
    for item in catalog:
        if(item.id == selected):
            new_stock = int(input('Please enter a new stocking value: '))
            item.stock = new_stock
            found = True
            print('Stock has been updated to: '+str(new_stock))

    if(found == False):
        print('** Error : Selected ID does not exist.')



def display_catalog():    
    print_header(' Catalog ')
    print('|ID |Title                | Category           | Price     | Stock       ')
    for item in catalog:
        print("|"+str(item.id).ljust(3)+"|"+item.title.ljust(20) + " | " + item.category.ljust(18) +  " | " + str(item.price).rjust(9) + " | " + str(item.stock).rjust(5))

    print('-' * 80)

def display_categories():
    print_header(' Catalog ')
    print(' | Category           |')
    unique_catagories = set()
    for item in catalog:
        unique_catagories.add(item.category)
    print(" | " + str(list(unique_catagories))+  "          |")
    
    
def display_zero_stock():
    print_header(' Catalog ')
    print('|ID |Title                | Category           | Price     | Stock       ')
    for item in catalog:
        if (item.stock == 0):
           print("|"+str(item.id).ljust(3)+"|"+item.title.ljust(20) + " | " + item.category.ljust(18) +  " | " + str(item.price).rjust(9) + " | " + str(item.stock).rjust(5))

    print('-' * 80)


def warehouse_value():
    value = 0.0
    for item in catalog:
        value += item.stock*item.price
        individual_value = item.stock*item.price
        print("Total Item Value: "+item.title + " $" +str(round(individual_value,2)))
    print("Total Warehouse Value: $"+str(round(value,2)))
       
    
        
def remove_item():
    display_catalog()
    selected = int(input(' Select an Id to remove: '))

    found = False
    for item in catalog:
        if(item.id == selected):
            catalog.remove(item)
            found = True
            print('Item has been deleted')

    if(found == False):
        print('** Error : Selected ID does not exist.')

    
def save_catalog():
    global data_file
    writer = open(data_file, "wb")
    pickle.dump(catalog, writer)
    writer.close()
    print(" Data Saved!")

def read_catalog():
    global data_file
    global id_count
    reader = open(data_file, "rb")
    temp_list = pickle.load(reader)
    
    for item in temp_list:
        catalog.append(item)

    last = catalog[-1]
    id_count = last.id + 1
    
read_catalog()    
# loop
valid_selection = ['1', '2', '3', '4', 'X', 'x', '5','6','7']
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
        save_catalog()
    elif(selection == '2'):
        display_catalog()
    elif(selection == '3'):
        display_zero_stock()
    elif(selection == '4'):
        update_stock()
        save_catalog()
    elif(selection == '5'):
        warehouse_value()
    elif(selection == '6'):
        remove_item()
        save_catalog()
    elif(selection == '7'):
        display_categories()
        
        
        
    input('Press Enter to Continue')
