from deck import Deck

class Dealer:
    def __init__(self):
        self.hand = Deck()
        self.hand.pull_cards()
        print(self.hand)

class Player:
    def __init__(self):
        self.hand = []

deck_1 = Deck()
deck_1.show_cards()

deck_1.pull_cards()

# print("Welcome to the table! Would you like to play Blackjack?")
# game_prompt = input("(Answer Y or N:) ")
# game_state = 'inactive'

# if game_prompt == "N":
#     print("Why'd you come in here then? Spend some money or get out!")
# elif game_prompt == "Y":
#     print("Great! I'll deal the cards.")
#     game_prompt == 'active'
# else:
#     print("That was a yes or no question buddy, pick one.")

# if game_state == 'active':


