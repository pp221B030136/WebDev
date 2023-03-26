n = int(input())
l = list(map(int, input().split()))

for i in range(0, n//2):
    x = l[i]
    l[i] = l[-i-1]
    l[-i-1] = x
    i += 1

for i in l:
    print(i, end = " ")
