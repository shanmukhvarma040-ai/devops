# Experiment 28: Test Cases for Containerized Application Using Selenium

## Aim
Develop test cases for a containerized application using Selenium.

## Workflow
1. Run Event Registration inside a Docker Nginx container on port `8084`.
2. Run automated Selenium test against `http://localhost:8084` to verify end-to-end functionality.

## Step-by-Step Execution
1. Install Selenium dependencies:
   ```bash
   npm install
   ```
2. Build Docker container image:
   ```bash
   docker build -t registrationapp .
   ```
3. Run container:
   ```bash
   docker run -d --name registrationcontainer -p 8084:80 registrationapp
   ```
4. Verify web application in browser at `http://localhost:8084`.
5. Run automated test:
   ```bash
   node containerTest.js
   ```
   Or run simple test:
   ```bash
   node containerTest_simple.js
   ```

## Clean Up
```bash
docker rm -f registrationcontainer
```

## Expected Output
```text
Page Title: Event Registration
Test Passed
```
Or for simple test:
```text
Container Test Successful
```
