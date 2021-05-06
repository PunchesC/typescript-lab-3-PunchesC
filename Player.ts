export default abstract class Player {
  winCount: number = 0;
  constructor(public name: string) {}

  //abstract methods have abstract keyword and semicolon
  abstract pickSymbol(): string;
}

