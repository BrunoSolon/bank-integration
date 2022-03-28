export interface Balance {
  currency: string;
  balance: number;
}

export interface Transaction {
  text: string;
  amount: number;
  type: number;
}

export interface BankInfo {
  id: number;
  name: string;
}

export interface IBankProvider {
  getTransactions(): Promise<Transaction[]>;
  getBalance(): Promise<Balance>;

  getBankInfo(): BankInfo;
}
