export class Bank2AccountBalance {
  private readonly _balance: number;
  private readonly _currency: string;

  constructor(balance: number, currency: string) {
    this._balance = balance;
    this._currency = currency;
  }

  get balance(): number {
    return this._balance;
  }

  get currency(): string {
    return this._currency;
  }
}
