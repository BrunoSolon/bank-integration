// Unit test

import { GetAllBalancesUseCase } from './GetAllBalancesUseCase';

import { Bank1AccountSource } from '../../../../infra/providers/bank1/Bank1AccountSource';
import { Bank2AccountSource } from '../../../../infra/providers/bank2/Bank2AccountSource';
import { Bank1ProviderAdapter } from '../../../../infra/providers/implementations/Bank1ProviderAdapter';
import { Bank2ProviderAdapter } from '../../../../infra/providers/implementations/Bank2ProviderAdapter';

let bank1AccountSource: Bank1AccountSource;
let bank2AccountSource: Bank2AccountSource;

let getAllBalancesUseCase: GetAllBalancesUseCase;

describe('get all balances useCase', () => {
  test('should return all balances of all available banks', async () => {
    bank1AccountSource = new Bank1AccountSource();
    bank2AccountSource = new Bank2AccountSource();

    const bank1Provider = new Bank1ProviderAdapter(bank1AccountSource);
    const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

    getAllBalancesUseCase = new GetAllBalancesUseCase([
      bank1Provider,
      bank2Provider
    ]);

    const response = await getAllBalancesUseCase.execute();

    expect(response.balances.length).toBe(2);
    expect(response.banks.length).toBe(2);
    expect(Object.keys(response)).toContain('balances');
    expect(Object.keys(response)).toContain('banks');
  });

  test('should return balance only from bank 2', async () => {
    bank2AccountSource = new Bank2AccountSource();

    const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

    getAllBalancesUseCase = new GetAllBalancesUseCase([bank2Provider]);

    const response = await getAllBalancesUseCase.execute();

    expect(response.balances.length).toBe(1);
    expect(response.banks.length).toBe(1);
    expect(response.banks[0].id).toBe(2);
    expect(Object.keys(response)).toContain('balances');
    expect(Object.keys(response)).toContain('banks');
  });
});
