import { loginPage } from '../page-objects/Login.page';

describe('Login page', () => {
  beforeEach(() => {
    loginPage.open('');
  });

  it('Standard user - login successfully', () => {
    loginPage.loginAs('standard_user', 'secret_sauce');

    console.log(
      'Is shopping cart displayed?',
      loginPage.isShoppingCartContainerVisibile()
    );
    expect(loginPage.isShoppingCartContainerVisibile()).to.be.true;
  });

  it('Problem user - cannot login successfully', () => {
    loginPage.loginAs('problem_user', 'wrong_password');

    expect(loginPage.isErrorVisible()).to.be.true;
  });
});
