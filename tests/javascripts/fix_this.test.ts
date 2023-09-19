import { User, Meeting } from '@/javascripts/fix_this';

describe('fix_this', () => {
  const users = [new User('Jeni'), new User('Dan'), new User('Carol')];
  const meeting = new Meeting(users);

  test('getPresenterName', () => {
    expect(meeting.getPresenterName()).toEqual('Jeni');
  });

  test('printSeatNumber', () => {
    expect(users[0].printSeatNumber()).toEqual(0);
    expect(users[1].printSeatNumber()).toEqual(1);
    expect(users[2].printSeatNumber()).toEqual(2);
  });
});
