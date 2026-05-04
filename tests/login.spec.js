const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const testData = require('../utils/testData');

test('TC001 - Verify user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(testData.validUser.username,testData.validUser.password);

    await inventoryPage.expectOnPage();
});

test('TC002 - Verify error message appears for invalid login', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.invalidUser.username,testData.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(/Username and password/);
});

test('TC003 - Verify error when login with empty fields', async ({ page }) =>{
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.clickLogin();

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
        "Username is required"
    );
});

test('TC004 - Verify user can add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await inventoryPage.expectOnPage();

  await inventoryPage.addItemToCart();
  await inventoryPage.expectItemAddedToCart();
});

test('TC005 - Verify user can remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(testData.validUser.username,testData.validUser.password);

  await inventoryPage.expectOnPage();

  await inventoryPage.addItemToCart();
  await inventoryPage.removeItemFromCart();

  await inventoryPage.expectItemRemovedFromCart();
});

test('TC006 - Verify user can complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(testData.validUser.username, testData.validUser.password);

  await inventoryPage.expectOnPage();
  await inventoryPage.addItemToCart();

  await cartPage.goToCart();
  await cartPage.checkout();

  await checkoutPage.fillCheckoutInformation(
    testData.checkoutUser.firstName, 
    testData.checkoutUser.lastName,
    testData.checkoutUser.postalCode
  );

  await checkoutPage.continueCheckout();
  await checkoutPage.finishOrder();

  await checkoutPage.expectOrderComplete();
});