# Experiment 24: Integrate Kubernetes with Docker

## Aim
Integrate Kubernetes with Docker to deploy containerized applications.

## Prerequisites
- Docker image `myweb` from Experiment 18 built locally.
- Kubernetes enabled in Docker Desktop (or Minikube).

## How to Execute
```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
```

## Expected Output
```text
NAME    READY   UP-TO-DATE   AVAILABLE
myweb   1/1     1            1

NAME                    READY   STATUS
myweb-xxxxxxxxx-xxxxx   1/1     Running
```
