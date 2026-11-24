# Experiment 22: Java Palindrome Program Using Docker

## Aim
Implement a palindrome program in Java using Docker.

## Files
- `Palindrome.java`: Java program reading a number and checking if it is a palindrome.
- `Dockerfile`: Compiles and executes the program.

## How to Execute
Notice `-it` flag for keyboard input:
```bash
docker build -t palindromeapp .
docker run -it --rm palindromeapp
```

## Expected Output
```text
Enter number: 121
Palindrome
```
For `123`:
```text
Enter number: 123
Not Palindrome
```
