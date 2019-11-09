// 1a: Create Login class and export an instance of it

import PageObject from './PageObject';

class LoginPage extends PageObject {
  constructor() {
    super();
  }

  get userName() {
    return $('#user-name');
  }
  get passWord() {
    return $('#password');
  }
  get submitBtn() {
    return $('.btn_action');
  }
  get errorMsg() {
    return $("[data-test='error']");
  }
  get shoppingCartContainer() {
    return $('#shopping_cart_container');
  }

  loginAs(username, password) {
    this.userName.setValue(username);
    this.passWord.setValue(password);
    this.submitBtn.click();
  }

  isShoppingCartContainerVisibile() {
    return this.shoppingCartContainer.isDisplayed();
  }

  isErrorVisible() {
    return this.errorMsg.isDisplayed();
  }
}

export const loginPage = new LoginPage();
