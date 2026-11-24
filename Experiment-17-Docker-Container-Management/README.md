# Experiment 17: Explore Docker Commands for Container Management

## Aim
Explore Docker commands for container management.

## Docker Commands Reference Table

| Command | Purpose |
|---|---|
| `docker --version` | Display Docker version |
| `docker pull nginx` | Download nginx image from Docker Hub |
| `docker images` | List all downloaded images |
| `docker run -d --name web -p 8081:80 nginx` | Run container in background mapping port 8081 -> 80 |
| `docker ps` | List currently running containers |
| `docker ps -a` | List all containers (running and stopped) |
| `docker stop web` | Stop the running container |
| `docker start web` | Restart the stopped container |
| `docker logs web` | View console logs of the container |
| `docker rm -f web` | Forcefully remove the container |
| `docker rmi nginx` | Remove the nginx Docker image |

## Verification
After `docker run`, open `http://localhost:8081` in Chrome to see:
```text
Welcome to nginx!
```
