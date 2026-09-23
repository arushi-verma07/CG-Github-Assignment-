#-------Question-60--------#

name=input()
marks=list(map(int, input().split()))

total=marks[0]+marks[1]+marks[2]
average=total/3

print(f"Name: {name}")
print(f"Total: {total}")
print(f"Average: {average:.2f}")

#-------Question-61--------#

student_id = input()

degree, batch, branch, roll = student_id.split("-")

last_three = student_id[-3:]
roll_number = int(last_three)

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll Number: {roll_number}")

#-------Question-62--------#

name = input()

words = name.split()

first_name = words[0].lower()
last_name = words[2].lower()

username = first_name + "." + last_name

print(username)

#-------Question-63--------#

text = input()

words = text.split()

print(f"First word: {words[0]}")
print(f"Last word: {words[-1]}")
print(f"Number of words: {len(words)}")

#-------Question-64--------#

email = input()

if "@" in email:
    username, domain = email.split("@")

    print("Username:", username)
    print("Domain:", domain)

#-------Question-65--------#

char = input()

code = ord(char)

print(f"Character: {char}")
print(f"Code: {code}")
print(f"Previous: {chr(code - 1)}")
print(f"Next: {chr(code + 1)}")

#-------Question-66--------#

product = input()
price, quantity, discount_percentage = map(float, input().split())

subtotal = price * quantity
discount = subtotal * discount_percentage / 100
final_total = subtotal - discount

print(f"Product: {product}")
print(f"Price: {price:.2f}")
print(f"Quantity: {int(quantity)}")
print(f"Subtotal: {subtotal:.2f}")
print(f"Discount: {discount:.2f}")
print(f"Final Total: {final_total:.2f}")

#------Question-67----------#

date = input()

day, month, year = date.split("-")

print(f"Day: {day}")
print(f"Month: {month}")
print(f"Year: {year}")

year_slice = date[-4:]
print(year_slice)

#-------Question-68--------#

text = input()

words = text.split()

first_word = words[0]
second_word = words[1]

print(f"First Word: {first_word}")
print(f"Second Word: {second_word}")
print(f"First Word Reversed: {first_word[::-1]}")
print(f"Second Word Reversed: {second_word[::-1]}")

#--------Question-69---------#

student_id = input()

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = parts[3]

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll: {roll}")
print(f"Code: {degree}/{branch}/{roll}")

#-------Question-70--------#

full_name = input()

words = full_name.split()

first_name = words[0]
last_name = words[-1]

first_upper = first_name[:3].upper()
last_lower = last_name[2:]

reversed_name = full_name[::-1]

print(f"Original: {full_name}")
print(f"First Name: {first_name}")
print(f"Last Name: {last_name}")
print(f"First Name (Upper Part): {first_upper}")
print(f"Last Name (Lower Part): {last_lower}")
print(f"Full Name Reversed: {reversed_name}")