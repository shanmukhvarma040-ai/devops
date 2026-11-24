# Experiment 12: Continuous Integration & Development Using Jenkins

## Aim
Demonstrate Continuous Integration and Continuous Development using Jenkins.

## Job Name
`CIProject`

## Setup
1. Create a Freestyle job named `CIProject`.
2. Under **Source Code Management**, select **Git** and enter your repository URL.
3. Under **Build Triggers**, select **Poll SCM** and enter `H/5 * * * *`.
4. Under **Build Steps**, add **Execute Windows batch command** and paste `commands.bat`.
5. Click **Save** -> **Build Now**.

## Expected Output
```text
Starting CI Process
Registration Form Verified
Build Successful
Finished: SUCCESS
```
