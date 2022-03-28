import { Controller } from '../../../../core/infra/Controller';
import { GetAllBalancesController } from './GetAllBalancesController';
import { GetAllBalancesUseCase } from './GetAllBalancesUseCase';

import { Bank1ProviderAdapter } from '../../../../infra/providers/implementations/Bank1ProviderAdapter';
import { Bank2ProviderAdapter } from '../../../../infra/providers/implementations/Bank2ProviderAdapter';

import { Bank1AccountSource } from '../../../../infra/providers/bank1/Bank1AccountSource';
import { Bank2AccountSource } from '../../../../infra/providers/bank2/Bank2AccountSource';

export const makeGetAllBalancesController = (): Controller => {
  // API wrappers
  const bank1AccountSource = new Bank1AccountSource();
  const bank2AccountSource = new Bank2AccountSource();

  // Wrappers injection
  const bank1Provider = new Bank1ProviderAdapter(bank1AccountSource);
  const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

  const getAllBalancesUseCase = new GetAllBalancesUseCase([
    bank1Provider,
    bank2Provider
  ]);

  return new GetAllBalancesController(getAllBalancesUseCase);
};
