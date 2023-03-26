def pos_neg(a, b, negative):
  if negative == True:
    if a < 0 and b < 0:
      return True
  elif a * b < 0:
    return True
  return False
