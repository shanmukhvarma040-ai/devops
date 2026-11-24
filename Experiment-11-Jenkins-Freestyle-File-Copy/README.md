# Experiment 11: File Creation and Copying Using Jenkins Freestyle Project

## Aim
Demonstrate file creation and copying using a Jenkins Freestyle Project.

## Job Name
`FileCopy`

## Build Step (Execute Windows batch command)
```bat
echo Hello Jenkins > file1.txt
copy file1.txt file2.txt
type file2.txt
```

## How to Execute
1. Open Jenkins (`http://localhost:8080`) -> **New Item**.
2. Name: `FileCopy` -> **Freestyle project** -> **OK**.
3. Under **Build Steps**, click **Add build step** -> **Execute Windows batch command**.
4. Paste the commands from `commands.bat`.
5. Click **Save** -> **Build Now** -> Check **Console Output**.

## Expected Output
```text
1 file(s) copied.
Hello Jenkins
Finished: SUCCESS
```
