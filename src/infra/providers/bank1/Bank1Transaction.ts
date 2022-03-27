export class Bank1Transaction {
  public static TYPE_CREDIT: number = 1;
  public static TYPE_DEBIT: number = 2;

  private readonly _amount: number;
  private readonly _type: number;
  private readonly _text: string;

  constructor(amount: number, type: number, text: string) {
    this._amount = amount;
    this._type = type;
    this._text = text;
  }

  get amount(): number {
    return this._amount;
  }

  get type(): number {
    return this._type;
  }

  get text(): string {
    return this._text;
  }
}
