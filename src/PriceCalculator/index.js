import User from '../User';
import Product from '../Product';
import RebateCalculator from '../RebateCalculator';

/**
 * Calculates the price by getting the required information
 */
class PriceCalculator {
  constructor(
    productPrice,
    productSpecificPrice,
    publishedDate,
    userType,
    productType,
  ) {
    this._publishedDate = publishedDate;
    this._productPrice = productPrice;
    this._productSpecificPrice = productSpecificPrice;
    this._objUser = new User(userType);
    this._objProduct = new Product(productType);
  }

  claculatePrice() {
    const isCompanyUser = this._objUser.isCompanyUser();
    const isNewProduct = this._objProduct.isNewProduct();
    const objRebateCalculator = new RebateCalculator(
      isNewProduct,
      isCompanyUser,
      this._publishedDate,
    );

    // product price is calcuated based on the below formula as per diffrent scenarios
    const productFinalPrice =
      this._productPrice +
      this._productSpecificPrice -
      objRebateCalculator.calculateRebateProductDateWise() -
      objRebateCalculator.calculateRebateUserWise();

    return productFinalPrice;
  }
}

export default PriceCalculator;
