from django.db import models

class Character(models.Model):
    name = models.CharField(max_length=100)
    char_class = models.CharField(max_length=100)  # 'class' is a reserved keyword in Python
    level = models.IntegerField()
    exp = models.IntegerField()
    str_stat = models.IntegerField(db_column='STR')
    dex_stat = models.IntegerField(db_column='DEX')
    con_stat = models.IntegerField(db_column='CON')
    int_stat = models.IntegerField(db_column='INT')
    wis_stat = models.IntegerField(db_column='WIS')
    cha_stat = models.IntegerField(db_column='CHA')
    background = models.TextField()
