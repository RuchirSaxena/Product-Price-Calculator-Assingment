import User from '.';
import { USER_TYPE } from '../Constants';

describe('User', () => {
  it('User is company user', () => {
    const objUser = new User(USER_TYPE.COMPANY);
    const actual = objUser.isCompanyUser();
    const expected = true;
    expect(expected).toEqual(actual);
  });
});

it('User is normal user', () => {
  const objUser = new User(USER_TYPE.NORMAL);
  const actual = objUser.isCompanyUser();
  const expected = false;
  expect(actual).toEqual(expected);
});
