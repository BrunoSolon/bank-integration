import { Controller } from '../../../../core/infra/Controller';
import { GetAllBalancesController } from './GetAllBalancesController';
import { GetAllBalancesUseCase } from './GetAllBalancesUseCase';

import { Bank1ProviderImp } from '../../../../infra/providers/implementations/Bank1ProviderImp';
import { Bank2ProviderImp } from '../../../../infra/providers/implementations/Bank2ProviderImp';

import { Bank1AccountSource } from '../../../../infra/providers/bank1/Bank1AccountSource';
import { Bank2AccountSource } from '../../../../infra/providers/bank2/Bank2AccountSource';

export const makeGetAllBalancesController = (): Controller => {
  // API wrappers
  const bank1AccountSource = new Bank1AccountSource();
  const bank2AccountSource = new Bank2AccountSource();

  // Wrappers injection
  const bank1Provider = new Bank1ProviderImp(bank1AccountSource);
  const bank2Provider = new Bank2ProviderImp(bank2AccountSource);

  const getAllBalancesUseCase = new GetAllBalancesUseCase([
    bank1Provider,
    bank2Provider
  ]);

  return new GetAllBalancesController(getAllBalancesUseCase);
};
