def array_front9(nums):
  if len(nums) < 4:
    x = len(nums)
  else:
    x = 4
  for i in range(x):
    if nums[i] == 9:
      return True
  return False
