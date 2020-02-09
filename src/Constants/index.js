// contains the contants based on certain assumptions related to product and price
const USER_TYPE = Object.freeze({
  NORMAL: 0,
  COMPANY: 1,
});

const PRODUCT_TYPE = Object.freeze({
  NEW: 0,
  OLD: 1,
});

const PRODUCT_PRICE = Object.freeze({
  NEW: 25,
  OLD: 35,
});

const REBATE = Object.freeze({
  PRODUCT_TYPE_DATE: 10,
  USER_TYPE: 5,
});

const DEFAUT_PRODUCT_PRICE = 100;

export { USER_TYPE, PRODUCT_TYPE, PRODUCT_PRICE, REBATE, DEFAUT_PRODUCT_PRICE };
