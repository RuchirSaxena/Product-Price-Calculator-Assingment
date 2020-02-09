import Product from '.';
import { PRODUCT_TYPE } from '../Constants';

describe('Product', () => {
  it('Product is a new product', () => {
    const objUser = new Product(PRODUCT_TYPE.NEW);
    const actual = objUser.isNewProduct();
    const expected = true;
    expect(expected).toEqual(actual);
  });
});

it('Product is a old product', () => {
  const objUser = new Product(PRODUCT_TYPE.OLD);
  const actual = objUser.isNewProduct();
  const expected = false;
  expect(actual).toEqual(expected);
});
