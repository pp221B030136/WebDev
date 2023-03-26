import math

a = int(input())
b = int(input())
x = math.ceil(math.sqrt(a)) 
y = math.floor(math.sqrt(b)) 

for i in range(x, y+1):
    print(i**2, end=" ")
