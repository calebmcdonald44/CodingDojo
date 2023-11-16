for number in range(0, 151):
    print(number)

for number in range(5, 1001, 5):
    print(number)

for number in range(1, 101):
    if number % 10 == 0:
        print("Coding Dojo")
    elif number % 5 == 0:
        print("Coding")
    else:
        print(number)

sum = 0
for number in range(1, 500001, 2):
    sum += number
print(sum)

for number in range(2018, 0, -4):
    print(number)

lowNum = 1
highNum = 70
mult = 4
for number in range(lowNum, highNum):
    if number % mult == 0:
        print(number)
    else:
        continue