def countdown(a):
    countdownList = []
    for number in range(a, -1, -1):
        countdownList.append(number)
    return countdownList

print(countdown(5))