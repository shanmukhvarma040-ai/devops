@echo off
echo Creating Story Project with Git Branches...
git init
git branch -M main

echo ^<html^> > book.html
echo ^<body^> >> book.html
echo ^<h1^>A Tale in Branches^</h1^> >> book.html
echo ^</body^> >> book.html
echo ^</html^> >> book.html

git add book.html
git commit -m "Created book base"

REM Chapter 1 Branch
git switch -c chapter1
echo // Chapter 1 added
git commit -am "Added chapter 1"
git switch main
git merge chapter1

REM Chapter 2 Branch
git switch -c chapter2
echo // Chapter 2 added
git commit -am "Added chapter 2"
git switch main
git merge chapter2

echo Branching and Merging Complete!
pause
