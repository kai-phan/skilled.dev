export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  printSeatNumber() {
    console.log('The seats have not been set');
  }
}

export class Meeting {
  getPresenterName: () => string;

  constructor(users: User[]) {
    const presenter = users[0];
    this.getPresenterName = presenter.getName.bind(presenter);
    this.setUserSeats(users);
  }
  setUserSeats(users: User[]) {
    for (let i = 0; i < users.length; i++) {
      users[i].printSeatNumber = () => {
        console.log(i);
      };
    }
  }
}
