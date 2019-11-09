export default class PageObject {
  constructor() {}

  open(path) {
    browser.url(path);
  }
}
