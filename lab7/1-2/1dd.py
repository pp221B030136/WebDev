n = int(input())
l = list(map(int, input().split()))
cnt = 0

for i in range(0, len(l)-1):
    if l[i] < l[i+1]:
        cnt += 1

print(cnt)