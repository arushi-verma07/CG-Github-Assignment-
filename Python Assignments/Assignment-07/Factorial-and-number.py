# Question 41
# N = int(input())
# digits = 0
# if N == 0:
#     digits = 1
# while N > 0:
#     N //= 10
#     digits += 1
# print(digits)


# Question 42
# N = int(input())
# total = 0
# while N > 0:
#     total += N % 10
#     N //= 10
# print(total)


# Question 43
# N = int(input())
# N_reverse = 0
# while N > 0:
#     N_reverse = N_reverse*10 + N % 10
#     N //= 10
# print(N_reverse)


# Question 44
# N = int(input())
# product = 1
# if N == 0:
#     product = 0
# while N > 0:
#     product *= N % 10
#     N //= 10
# print(product)


# Question 45
# N = int(input())
# while N > 0:
#     print(N % 10)
#     N //= 10


# Question 46
# N = int(input())
# last_digit = N % 10
# first_digit = N % 10
# while N > 0:
#     first_digit = N % 10
#     N //= 10
# print("First digit:", first_digit)
# print("Last digit:", last_digit)


# Question 47
# N = int(input())
# count = 0
# if N == 0:
#     count = 1
# while N > 0:
#     if (N % 10) % 2 == 0:
#         count += 1
#     N //= 10
# print(count)


# Question 48
# N = int(input())
# count = 0
# while N > 0:
#     if (N % 10) % 2 == 1:
#         count += 1
#     N //= 10
# print(count)


# Question 49
# N = int(input())
# total = 0
# while N > 0:
#     if (N % 10) % 2 == 0:
#         total += N % 10
#     N //= 10
# print(total)


# Question 50
# N = int(input())
# largest_digit = N % 10
# while N > 0:
#     if (N % 10) > largest_digit:
#         largest_digit = N % 10
#     N //= 10
# print(largest_digit)


# Question 51
# N = int(input())
# smallest_digit = N % 10
# while N > 0:
#     if (N % 10) < smallest_digit:
#         smallest_digit = N % 10
#     N //= 10
# print(smallest_digit)


# Question 52
# N = int(input())
# N_copy = N
# N_reverse = 0
# while N_copy > 0:
#     N_reverse = (N_reverse * 10) + N_copy % 10
#     N_copy //= 10
# if N_reverse == N:
#     print("Palindrome")
# else:
#     print("Not Palindrome")


# Question 53
# N = int(input())
# D = int(input())
# count = 0
# if N == 0 and D == 0:
#     count = 1
# while N > 0:
#     if (N % 10) == D:
#         count += 1
#     N //= 10
# print(count)


# Question 54
# N = int(input())
# are_digit_same = "Yes"
# prev_digit = N % 10
# N //= 10
# while N > 0:
#     curr_digit = N % 10
#     if curr_digit != prev_digit:
#         are_digit_same = "No"
#     prev_digit = curr_digit
#     N //= 10
# print(are_digit_same)


# Question 55
# import math
# N = int(input())
# last_digit = N % 10
# first_digit = N % 10
# N //= 10
# digits = int(math.log10(N)+1)
# middle_total = 0
# while N > 0:
#     first_digit = N % 10
#     if digits > 1:
#         middle_total += N % 10
#     N //= 10
#     digits -= 1
# print("First and last digits sum:", (first_digit + last_digit))
# print("Middle digits sum:", middle_total)


# Question 56
# N = int(input())
# factorial = 1
# i = 1
# while i <= N:
#     factorial *= i
#     print(factorial)
#     i += 1


# Question 57
# N = int(input())
# factorial = 1
# is_factorial = "No"
# i = 1
# while i<=N:
#     factorial*=i
#     if factorial == N:
#         is_factorial = "Yes"
#     i+=1
# print(is_factorial)


# Question 58
# N = int(input())
# factorial = 1
# i = 1
# while factorial <= N:
#     factorial *= i
#     i += 1
# factorial //= (i-1)
# print(factorial)