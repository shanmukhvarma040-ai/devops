# Experiment 5: Parameterized Pipeline Using Jenkins

## Aim
Implement a parameterized pipeline using Jenkins.

## Job Name
`ParameterPipeline`

## Pipeline Script
See `Jenkinsfile`.

## How to Execute
1. Create a Pipeline job named `ParameterPipeline`.
2. Paste the script from `Jenkinsfile` and click **Save**.
3. Run **Build Now** once to initialize the parameter.
4. Click **Build with Parameters**.
5. Enter a value (e.g. `Shanmukh`) for `NAME`.
6. Click **Build** and check **Console Output**.

## Expected Output
```text
Hello Shanmukh
Finished: SUCCESS
```
