# Experiment 27: Selenium Automated Testing Using JavaScript

## Aim
Write a simple JavaScript program to perform testing using Selenium.

## Files
- `registration.html`: Event registration form from Experiment 1.
- `test.js`: Full automated Selenium test that opens browser, inputs fields, submits, and verifies response.
- `test_simple.js`: Simplified short version for practical exams.
- `package.json`: NPM package metadata with `selenium-webdriver`.

## How to Execute
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run standard test:
   ```bash
   node test.js
   ```
   Or run simple test:
   ```bash
   node test_simple.js
   ```

## Expected Output
```text
Registration Successful!
```
(Chrome opens automatically, fills in the fields, clicks Register, verifies the text, and closes cleanly).
