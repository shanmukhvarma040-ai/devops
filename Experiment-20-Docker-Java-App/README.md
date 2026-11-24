# Experiment 20: Run a Java File Using Docker

## Aim
Run a Java file using Docker.

## Files
- `Hello.java`: Java console application.
- `Dockerfile`: Eclipse Temurin JDK 21 compiling and executing `Hello.java`.

## How to Execute
```bash
docker build -t javaapp .
docker run --rm javaapp
```

## Expected Output
```text
Hello Java from Docker
```
