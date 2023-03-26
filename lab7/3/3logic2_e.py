def round_sum(a, b, c):
  a = round10(a)
  b = round10(b)
  c = round10(c)
  return a+b+c

def round10(num):
  if num % 10 >= 5:
    return num + (10 - num % 10)
  else:
    return num - (num % 10)
