# Weekend 2 Fancy Calculator

### Assignment: Build a fully functional calculator

#### Notes
1. Build order
  1. First I set up the html
  2. then the basic CSS (using neat to make it all fit nice)
  3. then the basic Javascript
    - I started an identical project in the crash course a few weeks ago and so I specifically do not want to look at the code from before so I have to force myself to logically process each step and build it one piece at a time, understanding each piece fully
    - as such, it is hardly elegant or concise code
    - but now is the time to fully master the basics before attempting things higher ideals like elegance or concision
    - within the javascript the order was
      1. variables for all the buttons
      2. event listeners for all the numbers and operators to add the button value to the output value (as a string)
      3. event listeners for special characters like clear and positive/negative
      4. a ridiculous event listener for equals to basically mimic the eval() function (which we are not allowed to use)
        - save the current output value as the equation (still a string)
        - iterate through each character of the equation to check if it's an operator and then save that operator and everything thus far as the first number, then thereafter as the second number
        - check if the first number is negative (because the '-' first character coerces 0)
        - then check which operator it was and do the appropriate math
        - spit the answer back out into the output
2. issue I ran into
  - I didn't initialize the numbers in the equals event listener at first, and they kept coming back as NaN, null, or undefined, because you can't add something to NaN, null, or undefined
3. think forward moments
  - originally I duplicated 4 separate if/elseif statements in that final listener to check for each operator individually, then only later realized I could check for each one in the first 'if' by using ||
