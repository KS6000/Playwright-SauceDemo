class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItem = page.locator('.cart_item');
    }
async goToCart() {
    await this.cartIcon.click();
}

async expectItemInCart() {
    await this.cartItem.waitFor();
}

async checkout() {
    await this.checkoutButton.click();
}
}

module.exports = CartPage;