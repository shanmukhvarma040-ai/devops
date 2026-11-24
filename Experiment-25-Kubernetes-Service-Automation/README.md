# Experiment 25: Automate Container Execution Using Kubernetes Service

## Aim
Automate the execution and exposure of a containerized application using Kubernetes.

## Files
- `deployment.yaml`: Manages the application pod.
- `service.yaml`: Exposes the deployment externally using a `NodePort`.

## How to Execute
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get services
```

Access in browser or via port-forward:
```bash
kubectl port-forward svc/myweb-service 8083:80
```
Open `http://localhost:8083` in Chrome.

## Expected Output
```text
Hello Docker
My First Containerized Application
```
