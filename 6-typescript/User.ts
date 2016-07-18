export default class User {
  constructor(private name: string) {}

  public toString(): string {
    return `Name: ${this.name}`
  }
}
