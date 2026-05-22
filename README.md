# Playwright SauceDemo Automation

End-to-end test automation framework using Playwright with Page Object Model (POM) and CI/CD integration via GitHub Actions.

[![Playwright Tests](https://github.com/KS6000/Playwright-SauceDemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-SauceDemo/actions/workflows/playwright.yml)


## 📌 Overview
End-to-end automation framework built using Playwright and JavaScript, implementing the Page Object Model (POM) design pattern.

This project automates key user flows on the SauceDemo application, including login, cart management, and checkout process.

## ⭐ Key Features

- End-to-end test automation framework using Playwright
- Page Object Model (POM) design pattern
- Cross-browser testing (Chromium, Firefox, WebKit)
- CI/CD pipeline using GitHub Actions
- Automated HTML test reporting with Playwright
- Data-driven testing using external test data
  
---

## 🛠 Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Cross-browser testing (Chromium, Firefox, WebKit)

---

## ✅ Test Coverage
- User login (valid & invalid scenarios)
- Add item to cart
- Remove item from cart
- Checkout process
- Order completion verification

---

## ▶️ How to Run Tests

### 1. Install dependencies
npm install

### 2. Install Playwright browsers
npx playwright install

### 3. Run tests
npx playwright test

### 4. View HTML report
npx playwright show-report

---

## 📁 Project Structure

├── pages/             # Page Object Model classes  
│   ├── LoginPage.js  
│   ├── InventoryPage.js  
│   ├── CartPage.js  
│   └── CheckoutPage.js  

├── tests/             # Test files  
│   └── login.spec.js  

├── utils/             # Test data and helpers  
│   └── testData.js  

├── .github/workflows/ # CI/CD (GitHub Actions)  
│   └── playwright.yml  

├── playwright.config.js  
├── package.json  
└── README.md  

---

## 🚀 CI/CD Integration

This project uses GitHub Actions to automatically run Playwright tests on every push.

✔ Runs on Chromium, Firefox, and WebKit  
✔ Generates HTML test reports  
✔ Ensures code stability before deployment  

---

---

## 📸 Test Evidence

This project includes:

- Playwright HTML test reports
- Cross-browser execution results
- GitHub Actions CI/CD pipeline runs
- Automated test execution screenshots
- Test validation evidence for login, cart, and checkout flows

---

## 🔮 Future Improvements

- Add API mocking scenarios
- Add reusable utility/helper functions
- Add environment variable support (.env)
- Add visual regression testing
- Expand negative and edge-case validations
- Improve reporting and test analytics

---

## 👤 Author

Krishan Shura

GitHub: https://github.com/KS6000

