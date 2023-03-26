def cat_dog(str):
  cat_cnt = 0
  dog_cnt = 0
  for i in range(len(str)-2):
    if str[i] == 'c' and str[i+1] == 'a' and str[i+2] == 't':
      cat_cnt += 1
    if str[i] == 'd' and str[i+1] == 'o' and str[i+2] == 'g':
      dog_cnt += 1
  return cat_cnt == dog_cnt
