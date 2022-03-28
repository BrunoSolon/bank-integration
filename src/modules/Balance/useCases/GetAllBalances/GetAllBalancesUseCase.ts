import { IBankProvider } from '../../../../infra/providers/bank/IBankProvider';
import { BalanceDTO, BalanceResponse } from '../../domain/BalanceDTO';

export class GetAllBalancesUseCase {
  constructor(private bankProviders: IBankProvider[]) {}

  async execute(): Promise<BalanceDTO> {
    const balances: BalanceResponse[] = [];

    if (this.bankProviders.length) {
      await Promise.all(
        this.bankProviders.map(async (bankProvider) => {
          const balance = await bankProvider.getBalance();

          balances.push({ idBank: bankProvider.getBankInfo().id, ...balance });
        })
      );
    }

    console.log('Balances: ', balances);

    return {
      balances,
      banks: this.bankProviders.map((bankProvider) =>
        bankProvider.getBankInfo()
      )
    };
  }
}
