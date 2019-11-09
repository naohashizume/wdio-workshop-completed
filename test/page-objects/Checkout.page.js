import PageObject from './PageObject';

class CheckoutPage extends PageObject {
  constructor() {
    super();
  }

  startCheckOut() {
    $('#shopping_cart_container').click();
    $('.checkout_button').click();
  }

  typeUserInfo(f_name, l_name, postal_code) {
    $('#first-name').setValue(f_name);
    $('#last-name').setValue(l_name);
    $('#postal-code').setValue(postal_code);
  }

  continueCheckout() {
    $('.cart_button').click();
  }

  finishCheckout() {
    $('.cart_button').click();
  }

  isCheckoutCompletePageLoaded() {
    return $('.pony_express').isDisplayed();
  }
}

export const checkoutPage = new CheckoutPage();
