### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1
  return true
  else
  return false
  end
end

# Line 8 - argument not declared in brackets. Should be def func1(val). Stricly
#speaking ruby allows no brackets but by convention include them.
#Also line 9 assignment operator '=' used rather than comparison operator '=='.

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

# Line 20 - dif is not the term for defining function; should be def.
# Also, arguments a and b require (by syntax) a comma separating them and (by
# convention) brackets containing them.
# Also, one too many 'end's.

def looper
  for i in 1..10
  puts i
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 # Should be an 'end' here.

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #Should be "max(100,1) failed"
  failrues = failures + 1 #failures misspelt
end


if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

# failures is not a boolean; it is an integer. Since everything except nil and
# false evaluates to true in Ruby, this if statement will always return true.
# Which is not syntactically incorrect, but might not be what the writer of this
# code is trying to achieve.
