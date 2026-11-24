# Experiment 7: Scheduled Pipeline Using Jenkins

## Aim
Implement a scheduled pipeline using Jenkins.

## Job Name
`ScheduledPipeline`

## Pipeline Script
See `Jenkinsfile`.

## How to Execute
1. Create `ScheduledPipeline` as a Pipeline job in Jenkins.
2. Paste the script from `Jenkinsfile` and save.
3. Click **Build Now** once to activate the schedule trigger.
4. Jenkins will then run the job periodically every ~5 minutes based on the cron trigger `H/5 * * * *`.

## Expected Output
```text
Scheduled Pipeline Running
Finished: SUCCESS
```
