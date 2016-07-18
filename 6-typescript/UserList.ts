import User from './User';

export default class UserList {
  private users: User[] = [];

  public addUser(user: User): UserList {
    this.users.push(user);
    return this;
  }

  public toString(): string {
    return this.users
      .map((user: User) => { return user.toString(); })
      .join('\n');
  }
}
