// @ts-check
const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/home.model");
const { ProductPage } = require("../pages/product.model");

/**
 * Test case:
 * 1. Navigate to home page
 * 2. Choose `Sale` from Category menu
 * 3. Select `Sale dresses` sub menu
 * 4. Click on the first product listed
 * 5. Select first available size
 * 6. Add to bag
 */
test("user is able to add a sale dress to cart", async ({ page }) => {
  // navigate to home page
  const homePage = new HomePage(page);
  await homePage.open();

  // handle pop up on home page open
  await homePage.handleMysteryOfferPopUp();

  // navigate through menus to reach Sale dresses page
  await page.locator(homePage.saleMenuCategoryLink).first().hover();
  await page.locator(homePage.saleDressesSubMenuLink).click();

  // wait for page to complete loading
  await page.waitForLoadState();
  // validate if navigation succeeded
  await expect(page).toHaveURL(/collections\/sale-dresses/);

  const productPage = new ProductPage(page);

  // click on the first product listed from catalog;
  const firstProductTile = await productPage.productTileAt(0);
  // hacky way to make sure first tile is loaded and ready.
  await firstProductTile
    .locator(".product-tile__image-loading-logo")
    .waitFor({ state: "detached" });

  await firstProductTile.click();
  await page.waitForLoadState();
  await expect(page).toHaveURL(/products/);

  // click first available size
  const sizeOption = await productPage.firsAvailableSize();
  await sizeOption.waitFor({ state: "visible" });
  await sizeOption.click();

  // click Add to bag button
  await productPage.addToCart();

  // assert items added to cart
  await expect(productPage.itemsInCart).toHaveText("1");
});
