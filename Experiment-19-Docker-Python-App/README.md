# Experiment 19: Run a Python File Using Docker

## Aim
Run a Python file using Docker.

## Files
- `hello.py`: Python print script.
- `Dockerfile`: Python 3.12 slim image containerizing `hello.py`.

## How to Execute
```bash
docker build -t pythonapp .
docker run --rm pythonapp
```

## Expected Output
```text
Hello Python from Docker
```
