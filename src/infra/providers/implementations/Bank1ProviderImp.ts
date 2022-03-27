import {
  Balance,
  BankInfo,
  IBankProvider,
  Transaction
} from '../IBankProvider';
import { Bank1AccountSource } from '../bank1/Bank1AccountSource';
import { waitPromise } from '../../../utils/fakePromise';

export class Bank1ProviderImp implements IBankProvider {
  constructor(private bank1AccountSource: Bank1AccountSource) {}

  getBankInfo(): BankInfo {
    return { id: 1, name: 'Bank 1' }; // Temporarily mocked
  }

  async getBalance(): Promise<Balance> {
    await waitPromise();
    const balance = this.bank1AccountSource.getAccountBalance(1);
    const currency = this.bank1AccountSource.getAccountCurrency(1);

    return { balance, currency };
  }

  async getTransactions(): Promise<Transaction[]> {
    await waitPromise();
    const result = this.bank1AccountSource.getTransactions(1, null, null);

    return result.map((transaction) => ({
      amount: transaction.amount,
      text: transaction.text,
      type: transaction.type
    }));
  }
}
