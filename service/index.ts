import { users } from "./storage";
import { IUser } from "./types";

export class FormService {
  addUser(user: IUser): void {
    if (user) {
      users.push(user)
    } else {
      throw new Error('No user receveid.')
    }
  }

  getUsers(): IUser[] {
    const listOfUsers = users;
    return listOfUsers;
  }
}