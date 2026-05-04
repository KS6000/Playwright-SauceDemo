# Playwright SauceDemo Automation

[![Playwright Tests](https://github.com/KS6000/Playwright-SauceDemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-SauceDemo/actions/workflows/playwright.yml)


## 📌 Overview
End-to-end automation framework built using Playwright and JavaScript, implementing the Page Object Model (POM) design pattern.

This project automates key user flows on the SauceDemo application, including login, cart management, and checkout process.

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


