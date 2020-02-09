import PriceCalculator from '.';
import {
  DEFAUT_PRODUCT_PRICE,
  PRODUCT_PRICE,
  USER_TYPE,
  PRODUCT_TYPE,
} from '../Constants';

describe('PriceCalculator', () => {
  let productPrice = null;
  let productSpecificPrice = null;
  let publishedDate = null;
  let userType = null;
  let productType = null;

  beforeEach(() => {
    productPrice = DEFAUT_PRODUCT_PRICE; // default price = 100
    productSpecificPrice = PRODUCT_PRICE.NEW; // OLD = 35, NEW = 25
    publishedDate = new Date().toDateString(); // new Date().toDateString(),  OLD DATE 'Sun Feb 01 2020';
    userType = USER_TYPE.COMPANY; // NORMAL, COMPANY
    productType = PRODUCT_TYPE.NEW; // OLD, NEW
  });

  it(`Product type = new 
      User = company user
      Publish date = today`, () => {
    const objPriceCalculator = new PriceCalculator(
      productPrice,
      productSpecificPrice,
      publishedDate,
      userType,
      productType,
    );
    const result = objPriceCalculator.claculatePrice();
    const expected = 110;
    expect(result).toEqual(expected);
  });

  it(`Product type = new 
      User = normal
      Publish date = today`, () => {
    userType = USER_TYPE.NORMAL;
    const objPriceCalculator = new PriceCalculator(
      productPrice,
      productSpecificPrice,
      publishedDate,
      userType,
      productType,
    );
    const result = objPriceCalculator.claculatePrice();
    const expected = 115;
    expect(result).toEqual(expected);
  });

  it(`Product type = old 
      User = Normal user
      Product specific price = old
      Publish date = today`, () => {
    productSpecificPrice = PRODUCT_PRICE.OLD;
    productType = PRODUCT_TYPE.OLD;
    userType = USER_TYPE.NORMAL;
    const objPriceCalculator = new PriceCalculator(
      productPrice,
      productSpecificPrice,
      publishedDate,
      userType,
      productType,
    );
    const result = objPriceCalculator.claculatePrice();
    const expected = 135;
    expect(result).toEqual(expected);
  });

  it(`Product type = new 
      User = company user
      Product specific price = new
      Publish date = Old Date`, () => {
    publishedDate = 'Sun Feb 01 2020'; // Old date
    const objPriceCalculator = new PriceCalculator(
      productPrice,
      productSpecificPrice,
      publishedDate,
      userType,
      productType,
    );
    const result = objPriceCalculator.claculatePrice();
    const expected = 120;
    expect(result).toEqual(expected);
  });

  it(`Product type = old  
      User = company user
      Product specific price = old
      Publish date = today`, () => {
    productSpecificPrice = PRODUCT_PRICE.OLD;
    userType = USER_TYPE.COMPANY;
    productType = PRODUCT_TYPE.OLD;
    const objPriceCalculator = new PriceCalculator(
      productPrice,
      productSpecificPrice,
      publishedDate,
      userType,
      productType,
    );
    const result = objPriceCalculator.claculatePrice();
    const expected = 130;
    expect(result).toEqual(expected);
  });
});
