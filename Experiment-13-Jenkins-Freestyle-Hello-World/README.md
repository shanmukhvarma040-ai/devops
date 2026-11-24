# Experiment 13: Jenkins Freestyle Hello World & Workspace Variables

## Aim
Create a simple Hello World Freestyle Project and demonstrate workspace variables using Jenkins.

## Job Name
`HelloWorld`

## Build Step
```bat
echo Hello World
echo Job Name: %JOB_NAME%
echo Workspace: %WORKSPACE%
echo Build Number: %BUILD_NUMBER%
```

## Expected Output
```text
Hello World
Job Name: HelloWorld
Workspace: C:\ProgramData\Jenkins\.jenkins\workspace\HelloWorld
Build Number: 1
Finished: SUCCESS
```
