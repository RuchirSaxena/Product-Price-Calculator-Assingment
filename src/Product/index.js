import { PRODUCT_TYPE } from '../Constants';

/**
 * conatins product type related information
 */
class Product {
  constructor(productType) {
    this._productType = productType;
  }

  // checking if product is 'NEW' or 'OLD'
  isNewProduct() {
    let _isNewProduct = false;
    if (this._productType === PRODUCT_TYPE.NEW) {
      _isNewProduct = true;
    }
    return _isNewProduct;
  }
}

export default Product;
