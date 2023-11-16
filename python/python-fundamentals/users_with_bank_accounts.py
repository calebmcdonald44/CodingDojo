class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.checking = BankAccount()
        self.savings = BankAccount()
    
    # other methods
    
    def make_deposit(self, amount, account):
        if account == 'checking':
            self.checking.deposit(amount)
        elif account == 'savings':
            self.savings.deposit(amount)
        else:
            print("Invalid account type.")

    def make_withdrawal(self, amount, account):
        if account == 'checking':
            self.checking.withdraw(amount)
        elif account == 'savings':
            self.savings.withdraw(amount)
        else:
            print("Invalid account type.")

    def display_user_balance(self, account):
        if account == 'checking':
            self.checking.display_account_info()
        elif account == 'savings':
            self.savings.display_account_info()
        else:
            print("Invalid account type.")

class BankAccount:

    def __init__(self, int_rate=0.02, balance=0): 
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"New balance: {self.balance}")
        else:
            print(f"Deposit amount must be a positive value.")
        return self

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                print(f"New balance: {self.balance}")
            else:
                print("Insufficient funds: charging a $5 dollar fee")
                self.balance -= 5
        else:
            print("Withdrawal amount must be a postive value.")
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        self.balance = self.balance + (self.balance * self.int_rate)
        print(f"New balance: {self.balance}")
        return self

user_1 = User("Caleb", "email@website.com")
user_1.make_deposit(50, 'savings')
user_1.make_withdrawal(20, 'checking')
user_1.display_user_balance('checking')




