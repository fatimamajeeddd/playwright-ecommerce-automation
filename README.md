# Playwright E-Commerce Test Automation Framework

## About the Project
This project automates key e-commerce user journeys on the SauceDemo demo website using JavaScript and Playwright.

## Technologies Used
- JavaScript
- Playwright
- Node.js
- Git and GitHub

## Automated Test Scenarios
- Successful login with valid credentials
- Login failure with an incorrect password
- Add a product to the shopping cart
- Remove a product from the shopping cart
- Complete checkout and verify order confirmation

## How to Run the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test --grep "user can login successfully"
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test Reports
Playwright generates an HTML report that helps review test results and failures.

## Website Under Test
https://www.saucedemo.com/

## Author
Automation QA Practice Project

