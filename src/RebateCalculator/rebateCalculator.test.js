import RebateCalculator from '.';
import { REBATE } from '../Constants';

describe('RebateCalculator', () => {
  let isNewProduct = null;
  let isCompanyUser = null;
  let publishedDate = null;

  beforeEach(() => {
    isNewProduct = true;
    isCompanyUser = true;
    publishedDate = new Date().toDateString();
  });

  it('Is publish date today', () => {
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.isPublishedDateToday();
    const expected = true;
    expect(expected).toEqual(actual);
  });

  it('Is publish date not today', () => {
    publishedDate = 'Sun Feb 01 2020';
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.isPublishedDateToday();
    const expected = false;
    expect(expected).toEqual(actual);
  });

  it(`Calculate Rebate where 
      product is new
      date of publish is today and
      is normal user`, () => {
    isCompanyUser = false;
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.calculateRebateProductDateWise();
    const expected = REBATE.PRODUCT_TYPE_DATE;
    expect(expected).toEqual(actual);
  });

  it('Calculate Rebate where product=old date of publish = today and is company user = true ', () => {
    isNewProduct = false;
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.calculateRebateProductDateWise();
    const expected = 0;
    expect(expected).toEqual(actual);
  });

  it(`Calculate Rebate where
      product=new 
      date of publish = today and
      is company user = true `, () => {
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.calculateRebateUserWise();
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it(`Calculate Rebate where 
      product=new
      date of publish = today and
      is company user = false`, () => {
    isCompanyUser = false;
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      publishedDate,
    );
    const actual = objRebateCalculator.calculateRebateUserWise();
    const expected = 0;
    expect(expected).toEqual(actual);
  });
});
