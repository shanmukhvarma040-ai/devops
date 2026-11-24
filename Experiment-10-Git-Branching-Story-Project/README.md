# Experiment 10: Git Branching Story Project – "A Tale in Branches"

## Aim
Create a Git Branching Story Project – "A Tale in Branches" using Git branches, where each branch represents a chapter, and finally merge all chapters into a single `book.html` file.

## Step-by-Step Execution
1. Initialize repository and create base `book.html` on `main`:
   ```bash
   git init
   git branch -M main
   git add book.html
   git commit -m "Created book"
   ```
2. Create and merge Chapter 1:
   ```bash
   git switch -c chapter1
   # Add Chapter 1 lines before </body> in book.html:
   # <h2>Chapter 1</h2>
   # <p>A boy started his journey.</p>
   git add book.html
   git commit -m "Added chapter 1"
   git switch main
   git merge chapter1
   ```
3. Create and merge Chapter 2:
   ```bash
   git switch -c chapter2
   # Add Chapter 2 lines before </body>:
   # <h2>Chapter 2</h2>
   # <p>He reached a beautiful village.</p>
   git add book.html
   git commit -m "Added chapter 2"
   git switch main
   git merge chapter2
   ```
4. Open `book.html` in browser to view the complete story.

## Expected Output
```text
A Tale in Branches

Chapter 1
A boy started his journey.

Chapter 2
He reached a beautiful village.
```
