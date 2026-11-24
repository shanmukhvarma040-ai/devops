# Experiment 15: Scheduled Freestyle Project Using Jenkins

## Aim
Create a scheduled Freestyle Project using Jenkins.

## Job Name
`ScheduledFreestyle`

## Configuration
1. Create Freestyle job `ScheduledFreestyle`.
2. Under **Build Triggers**, select **Build periodically** and enter:
   ```text
   H/5 * * * *
   ```
3. Under Build Step:
   ```bat
   echo Scheduled Freestyle Job Running
   ```
4. Click **Save**.

## Expected Output
```text
Scheduled Freestyle Job Running
Finished: SUCCESS
```
