# Experiment 16: Setup and Install Jenkins

## Aim
Set up and install Jenkins on Windows.

## Requirements
- Java JDK 17 or 21 (e.g., Eclipse Temurin)
- Windows OS
- Internet connection

## Step-by-Step Installation
1. Install Java JDK from [adoptium.net](https://adoptium.net/).
2. Download Jenkins Windows installer (`jenkins.msi`) from [jenkins.io/download](https://www.jenkins.io/download/).
3. Run `jenkins.msi`, select port `8080`, and point to the installed JDK directory.
4. Finish installation and open browser at `http://localhost:8080`.
5. Enter the initial admin password from the path displayed on the unlock screen (e.g. `C:\ProgramData\Jenkins\.jenkins\secrets\initialAdminPassword`).
6. Select **Install suggested plugins**.
7. Create your First Admin User.
8. Click **Save and Finish** -> **Start using Jenkins**.

## Expected Output
Jenkins dashboard loads with:
```text
Jenkins is ready!
```
