line1 = input()
line2 = input()
gunnar = sum(list(map(int, line1.split())))
emma = sum(list(map(int, line2.split())))

if (gunnar > emma):
    print('Gunnar')
elif (emma > gunnar):
    print('Emma')
else:
    print('Tie')
