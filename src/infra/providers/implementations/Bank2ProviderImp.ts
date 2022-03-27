import {
  Balance,
  BankInfo,
  IBankProvider,
  Transaction
} from '../IBankProvider';
import { Bank2AccountSource } from '../bank2/Bank2AccountSource';
import { waitPromise } from '../../../utils/fakePromise';

export class Bank2ProviderImp implements IBankProvider {
  constructor(private bank2AccountSource: Bank2AccountSource) {}

  getBankInfo(): BankInfo {
    return { id: 2, name: 'Bank 2' }; // Temporarily mocked
  }

  async getBalance(): Promise<Balance> {
    await waitPromise();
    const { balance, currency } = this.bank2AccountSource.getBalance(1);

    return { balance, currency };
  }

  async getTransactions(): Promise<Transaction[]> {
    await waitPromise();
    const result = this.bank2AccountSource.getTransactions(1, null, null);

    return result.map((transaction) => ({
      amount: transaction.amount,
      text: transaction.text,
      type: transaction.type
    }));
  }
}
