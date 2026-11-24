# Experiment 2: Simple Pipeline Using Jenkins

## Aim
Create a simple pipeline using Jenkins.

## Job Name
`SimplePipeline`

## Pipeline Script
See `Jenkinsfile`.

## How to Execute
1. Open Jenkins at `http://localhost:8080`.
2. Click **New Item**.
3. Enter job name: `SimplePipeline`.
4. Select **Pipeline** and click **OK**.
5. Scroll down to **Pipeline Definition**, select **Pipeline script**.
6. Paste the code from `Jenkinsfile`.
7. Click **Save** -> **Build Now**.
8. Click on the build number -> **Console Output**.

## Expected Output
```text
Building Application
Testing Application
Finished: SUCCESS
```
