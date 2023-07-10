export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
    readonly id: number,
    readonly createdAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(avatar: string) {
    this._avatar = avatar;
  }
}
