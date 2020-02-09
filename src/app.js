import {
  DEFAUT_PRODUCT_PRICE,
  PRODUCT_PRICE,
  USER_TYPE,
  PRODUCT_TYPE,
} from './Constants';
import PriceCalculator from './PriceCalculator';

// default product price = 100
const productPrice = DEFAUT_PRODUCT_PRICE;

// price specific to a particular product type
const productSpecificPrice = PRODUCT_PRICE.NEW; // OLD = 35 NEW = 25

// current date is = today's date, previous dates are old dates
const publishedDate = new Date().toDateString(); // OLD DATE 'Sun Feb 01 2020';

// 2 types of user
const userType = USER_TYPE.COMPANY; // NORMAL and COMPANY

// 2 types of product
const productType = PRODUCT_TYPE.NEW; // OLD = 1  NEW =1

const objPriceCalcualtor = new PriceCalculator(
  productPrice,
  productSpecificPrice,
  publishedDate,
  userType,
  productType,
);

const getFinalProductPrice = () => {
  // eslint-disable-next-line no-console
  console.log(`Calculated price: ${objPriceCalcualtor.claculatePrice()} `);
};

getFinalProductPrice();
