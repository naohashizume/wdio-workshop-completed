import { checkoutPage } from '../page-objects/Checkout.page';
import { inventoryPage } from '../page-objects/Inventory.page';

describe('Checkout page', () => {
  it('should be able to checkout the cart', function() {
    inventoryPage.open();
    inventoryPage.addItem();
    checkoutPage.startCheckOut();
    checkoutPage.typeUserInfo('Nao', 'Hashizume', '1A3 4B6');
    checkoutPage.continueCheckout();
    checkoutPage.finishCheckout();

    expect(checkoutPage.isCheckoutCompletePageLoaded()).to.be.true;
  });
});
