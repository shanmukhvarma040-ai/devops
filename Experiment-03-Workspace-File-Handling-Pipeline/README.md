# Experiment 3: Workspace File Handling Pipeline Using Jenkins

## Aim
Create a workspace file handling pipeline using Jenkins.

## Job Name
`FilePipeline`

## Pipeline Script
See `Jenkinsfile`.

## How to Execute
1. Open Jenkins at `http://localhost:8080`.
2. Click **New Item** -> Name: `FilePipeline` -> **Pipeline** -> **OK**.
3. In **Pipeline script**, paste the code from `Jenkinsfile`.
4. Click **Save** -> **Build Now**.
5. Check **Console Output**.
6. Open the job's **Workspace** in Jenkins to see `file1.txt` and `file2.txt`.

## Expected Output
```text
1 file(s) copied.
Hello Jenkins
Finished: SUCCESS
```
