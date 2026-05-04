const { expect } = require('@playwright/test');
class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

async expectOnPage() {
    await this.page.waitForURL(/inventory/);
    await this.title.waitFor();
 }

async addItemToCart() {
  await this.addToCartButton.click();
}

async expectItemAddedToCart() {
  await expect(this.cartBadge).toHaveText('1');
}

async removeItemFromCart() {
  await this.removeButton.click();
}

async expectItemRemovedFromCart() {
  await expect(this.cartBadge).toHaveCount(0);
}
}

module.exports = InventoryPage;