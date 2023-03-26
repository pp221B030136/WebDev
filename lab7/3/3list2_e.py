def sum67(nums):
  found_6 = False
  sum = 0
  for num in nums:
    if found_6 == False:
      if num != 6:
        sum += num
      else:
        found_6 = True
    else:
      if num == 7:
        found_6 = False
  return sum
