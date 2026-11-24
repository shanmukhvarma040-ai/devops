@echo off
echo Practicing Source Code Management (SCM) on GitHub
git init
git branch -M main
git add registration.html
git commit -m "Initial commit - Registration Form"
echo.
echo To link with GitHub remote:
echo git remote add origin https://github.com/USERNAME/DevOpsLab.git
echo git push -u origin main
echo.
echo Practicing branching:
git branch update
git switch update
echo // Updated >> registration.html
git commit -am "Updated registration"
git push origin update
pause
