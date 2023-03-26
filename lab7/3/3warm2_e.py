def last2(str):
  last2 = str[-2:]
  cnt = 0
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      cnt += 1
  return cnt
