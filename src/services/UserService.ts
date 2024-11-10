import { User } from "../types";
import { Creatable, Readable, Editable, Deletable } from "../interfaces/ServiceInterfaces";

export class UserService implements Creatable<User>, Readable<User>, Editable<User>, Deletable<User> {
  private users: User[] = [];

  create(item: User): User {
    item.id = this.users.length + 1;
    this.users.push(item);
    return item;
  }

  getAll(): User[] {
    return this.users;
  }

  getById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: number, item: User): User | undefined {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...item, id };
      return this.users[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
