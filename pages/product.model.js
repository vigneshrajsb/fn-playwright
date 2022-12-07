import { BASE_URL } from "../config";

export class ProductPage {
  // trying to figure out the difference between loading and loaded time
  productTile = ".product-tile";

  addToCartBtn = 'text="Add to bag"';

  constructor(page) {
    this.page = page;
  }

  async open(link) {
    await this.page.goto(`${BASE_URL}/${link}`);
  }

  async productTileAt(n) {
    const tile = this.page.locator(".product-tile").nth(n);
    await tile.waitFor({ state: "visible" });
    return tile;
  }

  firsAvailableSize() {
    return this.page
      .locator(".product-info__size-button", {
        has: this.page.locator(
          ".product-info__size-button-input:not([data-no-stock])"
        ),
      })
      .first();
  }

  async addToCart() {
    const addToBag = this.page.locator(this.addToCartBtn).first();
    await addToBag.waitFor({ state: "visible" });
    await addToBag.click();
  }

  get itemsInCart() {
    return this.page.locator('[data-header-links="cart"] .cart-count-number');
  }
}
