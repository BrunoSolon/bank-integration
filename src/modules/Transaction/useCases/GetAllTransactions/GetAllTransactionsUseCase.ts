import { IBankProvider } from '../../../../infra/providers/bank/IBankProvider';
import {
  TransactionDTO,
  TransactionResponse
} from '../../domain/TransactionDTO';

export class GetAllTransactionsUseCase {
  constructor(private bankProviders: IBankProvider[]) {}

  async execute(): Promise<TransactionDTO> {
    const transactionsResponse: TransactionResponse[] = [];

    if (this.bankProviders.length) {
      await Promise.all(
        this.bankProviders.map(async (bankProvider) => {
          const transactions = await bankProvider.getTransactions();

          transactionsResponse.push({
            idBank: bankProvider.getBankInfo().id,
            transactions
          });
        })
      );
    }

    console.log('Transactions: ', transactionsResponse);

    return {
      transactions: transactionsResponse,
      banks: this.bankProviders.map((bankProvider) =>
        bankProvider.getBankInfo()
      )
    };
  }
}
