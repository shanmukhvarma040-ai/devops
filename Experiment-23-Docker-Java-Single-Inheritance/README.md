# Experiment 23: Java Single Inheritance Using Docker

## Aim
Implement single inheritance in Java using Docker.

## Files
- `Inheritance.java`: Demonstrates single inheritance (`Dog extends Animal`).
- `Dockerfile`: Compiles and runs `Inheritance.java`.

## How to Execute
```bash
docker build -t inheritanceapp .
docker run --rm inheritanceapp
```

## Expected Output
```text
Animal eats
Dog barks
```
