// @ts-check
import { BASE_URL } from "../config";

export class HomePage {
  mysteryOfferCloseBtn = ".bx-close-inside";

  saleMenuCategoryLink = ".menu-category__link:has-text('Sale')";

  saleDressesSubMenuLink = ".menu__link:has-text('Sale Dresses')";

  constructor(page) {
    this.page = page;
  }
  async open(url) {
    await this.page.goto(`${BASE_URL}`);
  }

  async handleMysteryOfferPopUp() {
    const popUpClose = this.page.locator(this.mysteryOfferCloseBtn);
    try {
      await popUpClose.waitFor({ timeout: 10000 });
      await popUpClose.click();
    } catch {}
  }
}
