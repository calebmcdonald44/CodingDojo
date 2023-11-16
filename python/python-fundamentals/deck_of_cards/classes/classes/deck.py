import card
import random
# from gameplay.py import dealer
# from gameplay.py import player

class Deck:

    def __init__( self ):
        suits = [ "spades" , "hearts" , "clubs" , "diamonds" ]
        self.cards = []

        for s in suits:
            for i in range(1,14):
                str_val = ""
                if i == 1:
                    point_val = [1, 11]
                    str_val = "Ace"
                elif i == 11:
                    str_val = "Jack"
                    point_val = 10
                elif i == 12:
                    str_val = "Queen"
                    point_val = 10
                elif i == 13:
                    str_val = "King"
                    point_val = 10
                else:
                    str_val = str(i)
                    point_val = i
                self.cards.append( card.Card( s , point_val , str_val ) )

    def show_cards(self):
        for card in self.cards:
            card.card_info()

    def pull_cards(self):
        deck_pull = random.randrange(52)
        random_card = self.cards[deck_pull].card_info()
        print("card", random_card)
        print(self)
        return self




