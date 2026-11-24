# Experiment 14: Parameterized Freestyle Project Using Jenkins

## Aim
Create a parameterized Freestyle Project using Jenkins.

## Job Name
`ParameterizedFreestyle`

## How to Execute
1. Create Freestyle project named `ParameterizedFreestyle`.
2. Check **This project is parameterized**.
3. Add **String Parameter**: Name = `NAME`, Default = `Student`.
4. In Build Step (Execute Windows batch command), enter:
   ```bat
   echo Hello %NAME%
   ```
5. Click **Save** -> **Build with Parameters** -> Enter `Shanmukh` -> **Build**.

## Expected Output
```text
Hello Shanmukh
Finished: SUCCESS
```
