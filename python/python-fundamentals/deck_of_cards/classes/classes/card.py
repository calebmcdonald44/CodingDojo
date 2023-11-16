class Card:

    def __init__( self , suit , point_val , string_val ):
        self.suit = suit
        self.point_val = point_val
        self.string_val = string_val

    def card_info(self):
        if self.string_val == 'Ace':
            print(f"{self.string_val} of {self.suit} : {self.point_val[0]} or {self.point_val[1]} points")
        else:
            print(f"{self.string_val} of {self.suit} : {self.point_val} points")