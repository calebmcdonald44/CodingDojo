class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
        return self

    def enroll(self):
        if self.is_rewards_member == True:
            print("User is already a member.")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
        return self

    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print("You don't have enough gold card points for that.")
        else:
            self.gold_card_points -= amount
        return self

user_1 = User("Caleb", "McDonald", "address@gmail.com", 25)
user_1.enroll().spend_points(50).display_info()

user_2 = User("Scott", "Dexter", "address@outlook.com", 34)
user_2.enroll().spend_points(80).display_info()

user_3 = User("Jesse", "Parsons", "address@yahoo.com", 25)
user_3.spend_points(40)
