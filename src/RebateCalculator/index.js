import { REBATE } from '../Constants';

/**
 * RebateCalculator is used for calculating rebate(discount)
 * based on diffrent condition
 */
class RebateCalculator {
  constructor(isNewProduct, isCompanyUser, publishedDate) {
    this._isNewProduct = isNewProduct;
    this._isCompanyUser = isCompanyUser;
    this._publishedDate = publishedDate;
  }

  // checking if 'publishedDate' is today's date
  isPublishedDateToday() {
    let _isPublishedDateToday = false;
    if (this._publishedDate === new Date().toDateString()) {
      _isPublishedDateToday = true;
    }
    return _isPublishedDateToday;
  }

  // calculating rebate based on type of product i.e.'NEW' and published date i.e. 'TODAY DATE'
  calculateRebateProductDateWise() {
    let _rebate = 0;
    if (this._isNewProduct && this.isPublishedDateToday()) {
      _rebate = REBATE.PRODUCT_TYPE_DATE;
    }
    return _rebate;
  }

  // calculating rebate based on user is 'COMPANY USER' or not
  calculateRebateUserWise() {
    let _rebate = 0;
    if (this._isCompanyUser) {
      _rebate = REBATE.USER_TYPE;
    }
    return _rebate;
  }
}

export default RebateCalculator;
