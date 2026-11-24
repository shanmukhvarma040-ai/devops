@echo off
echo === Docker Commands for Container Management ===
docker --version
docker pull nginx
docker images
docker run -d --name web -p 8081:80 nginx
docker ps
docker ps -a
docker stop web
docker start web
docker logs web
docker rm -f web
docker rmi nginx
pause
