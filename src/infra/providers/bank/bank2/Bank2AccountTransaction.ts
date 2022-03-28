/* eslint-disable no-unused-vars */
export enum TRANSACTION_TYPES {
  DEBIT,
  CREDIT
}

export class Bank2AccountTransaction {
  private readonly _type: TRANSACTION_TYPES;
  private readonly _amount: number;
  private readonly _text: string;

  constructor(amount: number, type: TRANSACTION_TYPES, text: string) {
    this._amount = amount;
    this._type = type;
    this._text = text;
  }

  get type(): TRANSACTION_TYPES {
    return this._type;
  }

  get amount(): number {
    return this._amount;
  }

  get text(): string {
    return this._text;
  }
}
