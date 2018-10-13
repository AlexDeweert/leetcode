"""
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward
Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Coud you solve it without converting the integer to a string?
"""
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0: return False
        if x == 10: return False
        origin = x
        temp = 0
        ones = 0
        remaining = 0
        result = 0
        count = 0

        #First compute the number of placeholders; ie 100 has the 1s,10s,and 100s spots = 3
        temp = x
        while( temp > 0 ):
            temp = temp/10
            count = count+1

        #Strip off each value in the ones position
        #add that stripped value to the reversed integer result
        #ie 326, strip 6, 6*100, continue
        #results in 6*100 + 2*10 + 3*1 = 623
        #this is the reversed value of 326, if 623 == 326 then we have a palindrome, else false
        while( x >= 1 ):
            ones = x%10
            result = result + ones*math.pow(10,(count-1))
            remaining = (x-ones)/10
            x = remaining
            count = count-1


        if int(result) == origin: return True
        else: return False
