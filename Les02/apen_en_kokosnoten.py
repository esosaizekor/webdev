# https://dodona.ugent.be/nl/courses/1523/series/16785/activities/654951832

from math import floor

piraten = 0
noten = 0

piraten = int(input("Geef aantal piraten: "))
noten = int(input("Geef aantal noten :"))

item_piraat=0
item_aap=0
index=0

while index < piraten:
     item_piraat = floor(noten)/piraten
     item_aap = floor(floor(noten)%piraten)
         
     if(item_aap == 1):
        print("%d noten = %d noten voor piraat#%d en %d noot voor de aap" % (noten, item_piraat,index+1,item_aap))
     elif(item_aap > 1):
        print("%d noten = %d noten voor piraat#%d en %d noten voor de aap" % (noten, item_piraat,index+1,item_aap))
     else:
        print("%d noten = %d noten voor piraat#%d en geen noten voor de aap" % (noten, item_piraat,index+1))
        
     index+=1
     noten = floor(noten) - item_piraat


item_piraat = floor(noten)/piraten
item_aap = floor(floor(noten)%piraten) 

if(item_aap == 1):
    print("elke piraat krijgt %d noten en %d noot voor de aap" % (item_piraat,item_aap))
elif(item_aap > 1):
    print("elke piraat krijgt %d noten en %d noten voor de aap" % (item_piraat,item_aap))
else:
    print("elke piraat krijgt %d noten en geen noten voor de aap" % item_piraat)     