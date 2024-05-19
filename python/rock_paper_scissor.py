import random


options = ['✊', '✋', '✌️']

player_score = 0
computer_score = 0


def calculate():
    global player_score
    player_score += 1
    # function to check which win?
    # rock > scissor
    # rock < paper
    # paper < scissor


for i in range(3):
    print("\n----------------------------")
    print(f"you: {player_score}\ncomputer: {computer_score}")
    print("----------------------------\n")

    player_pick = int(input("pick(1(✊),2(✋),3(✌️ ): "))
    print('you picked', options[player_pick-1])

    computer_pick = random.randint(0, 2)
    print('computer picked', options[computer_pick-1])

    # TODO check for win
    calculate()
