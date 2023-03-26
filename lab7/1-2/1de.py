n = int(input())
l = list(map(int, input().split()))

x = False
for i in range(n-1):
    if l[i] * l[i+1] > 0:
        x = True

if x == True:
    print("YES")
else:
    print("NO")