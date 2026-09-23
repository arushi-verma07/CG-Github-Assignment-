#------Question-33-------#

text="python is easy "
print(text.split())

#-------Question-34-------#

data="apple,banana,mango"
print(data.split(","))

#------Question-35--------#

text="python is easy"
print(text.split(","))

#------Question-36--------#

text="Rahul Kumar Sharma"

a, b, c =text.split()

print(a)
print(b)
print(c)

#------Question-37--------#

first_name, last_name=input().split()

print("First Name:", first_name)
print("Last Name:", last_name)

#------Question-38--------#

a, b, c = map(int, input().split())

print(a + b + c)

#------Question-39---------#

name, age, course, city = input().split(",")

print("Name:", name)
print("Age:", age)
print("Course:", course)
print("City:", city)

#-------Questiion-40--------#

email = input()

username, domain = email.split("@")

print("Username:", username)
print("Domain:", domain)

#-------Question-41---------#

sentence = input()

words = sentence.split()

print("First word:", words[0])
print("Last word:", words[-1])
print("Total words:", len(words))



