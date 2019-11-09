import { inventoryPage } from '../page-objects/Inventory.page';

describe('Inventory page', () => {
  beforeEach(() => {
    inventoryPage.open();
  });

  afterEach('reset app state', function() {
    inventoryPage.resetAppState();
  });

  it('add one item to cart', () => {
    inventoryPage.addItem();

    expect(inventoryPage.getNumberOfItemsInCart()).to.equal(1);
  });

  it('removes one item', function() {
    inventoryPage.addItem();
    inventoryPage.addItem();
    inventoryPage.removeItem();
    expect(inventoryPage.getNumberOfItemsInCart()).to.equal(1);
  });
});
