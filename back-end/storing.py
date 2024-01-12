import json

# Storing

def add_new_ingredient(ingredient, recipe_name):
    global new_recipe 
    new_recipe = {}
    new_recipe["recipe_name"] = recipe_name
    new_recipe["ingredient"] = ingredient


all_ingredients = []

i = 0
recipe_name = input("What is the name of your recipe? ")
number = int(input("How many ingredients? "))

while i < number:
    single_ingredient = input("Enter your ingredients ")
    all_ingredients.append(single_ingredient)
    i += 1

add_new_ingredient(all_ingredients, recipe_name)

print(new_recipe)

with open (f"files/{recipe_name}.json", "w") as file:
    json.dump(new_recipe, file)
