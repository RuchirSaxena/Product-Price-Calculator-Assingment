import { USER_TYPE } from '../Constants';

/**
 * conatins User type related information
 */
class User {
  constructor(userType) {
    this._userType = userType;
  }

  // checking if user is 'COMPANY USER' or  'NORMAL USER'
  isCompanyUser() {
    let _isCompanyUser = false;
    if (this._userType === USER_TYPE.COMPANY) {
      _isCompanyUser = true;
    }
    return _isCompanyUser;
  }
}

export default User;
