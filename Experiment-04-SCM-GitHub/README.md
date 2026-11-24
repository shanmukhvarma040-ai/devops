# Experiment 4: Source Code Management (SCM) on GitHub

## Aim
Practice Source Code Management (SCM) on GitHub using the source code developed in Experiment 1.

## Commands
Open Git Bash inside this folder and run:
```bash
git init
git branch -M main
git add registration.html
git commit -m "Added registration form"
git remote add origin https://github.com/USERNAME/DevOpsLab.git
git push -u origin main

# Practice branching
git branch update
git switch update
# (make a change in registration.html)
git commit -am "Updated registration"
git push origin update
```

If Git requests identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Expected Output
```text
Switched to a new branch 'update'
[update ...] Updated registration
To https://github.com/USERNAME/DevOpsLab.git
 * [new branch]      update -> update
```
