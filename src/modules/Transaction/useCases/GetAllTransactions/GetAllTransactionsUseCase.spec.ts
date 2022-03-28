// Unit test

import { GetAllTransactionsUseCase } from './GetAllTransactionsUseCase';

import { Bank1AccountSource } from '../../../../infra/providers/bank1/Bank1AccountSource';
import { Bank2AccountSource } from '../../../../infra/providers/bank2/Bank2AccountSource';
import { Bank1ProviderAdapter } from '../../../../infra/providers/implementations/Bank1ProviderAdapter';
import { Bank2ProviderAdapter } from '../../../../infra/providers/implementations/Bank2ProviderAdapter';

let bank1AccountSource: Bank1AccountSource;
let bank2AccountSource: Bank2AccountSource;

let getAllTransactionsUseCase: GetAllTransactionsUseCase;

describe('get all transactions useCase', () => {
  test('should return all transactions of all available banks', async () => {
    bank1AccountSource = new Bank1AccountSource();
    bank2AccountSource = new Bank2AccountSource();

    const bank1Provider = new Bank1ProviderAdapter(bank1AccountSource);
    const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

    getAllTransactionsUseCase = new GetAllTransactionsUseCase([
      bank1Provider,
      bank2Provider
    ]);

    const response = await getAllTransactionsUseCase.execute();

    expect(response.transactions.length).toBe(2);
    expect(response.banks.length).toBe(2);
    expect(Object.keys(response)).toContain('transactions');
    expect(Object.keys(response)).toContain('banks');
  });

  test('should return transaction from bank 2', async () => {
    bank2AccountSource = new Bank2AccountSource();

    const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

    getAllTransactionsUseCase = new GetAllTransactionsUseCase([bank2Provider]);

    const response = await getAllTransactionsUseCase.execute();

    expect(response.transactions.length).toBe(1);
    expect(response.banks.length).toBe(1);
    expect(response.banks[0].id).toBe(2);
    expect(Object.keys(response)).toContain('transactions');
    expect(Object.keys(response)).toContain('banks');
  });
});
