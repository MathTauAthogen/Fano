import os
suits = ["heart","club","diamond","spade"]
for i in range(4):
    for j in range(15):
        os.rename(f"8BitDeckAssets_{1+j+15*i}.png", f"{suits[i]}{j+1}.png")
royals = ["jack","queen","king","ace"]
for i in range(4):
    for j in range(4):
       os.rename(f"{suits[i]}{j+11}.png", f"{suits[i]}{royals[j]}.png")
os.rename("diamond1.png","redjoker.png")
os.rename("spade1.png","bluejoker.png")
os.rename("club1.png","bluedown.png")
os.rename("heart1.png","reddown.png")
