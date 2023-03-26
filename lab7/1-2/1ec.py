def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

x, y = input().split()
print(xor(x, y))