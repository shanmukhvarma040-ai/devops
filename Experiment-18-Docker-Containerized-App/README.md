# Experiment 18: Simple Containerized Application Using Docker

## Aim
Create a simple containerized application using Docker.

## Files
- `index.html`: Custom web page.
- `Dockerfile`: Nginx Alpine based image copying `index.html`.

## How to Execute
```bash
docker build -t myweb .
docker run -d --name mywebcontainer -p 8082:80 myweb
```
Open `http://localhost:8082` in browser.

## Clean Up
```bash
docker rm -f mywebcontainer
```

## Expected Output
The web page displays:
```text
Hello Docker
My First Containerized Application
```
