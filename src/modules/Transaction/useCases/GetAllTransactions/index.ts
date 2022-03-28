import { Controller } from '../../../../core/infra/Controller';
import { GetAllTransactionsController } from './GetAllTransactionsController';
import { GetAllTransactionsUseCase } from './GetAllTransactionsUseCase';

import { Bank1AccountSource } from '../../../../infra/providers/bank1/Bank1AccountSource';
import { Bank2AccountSource } from '../../../../infra/providers/bank2/Bank2AccountSource';

import { Bank1ProviderAdapter } from '../../../../infra/providers/implementations/Bank1ProviderAdapter';
import { Bank2ProviderAdapter } from '../../../../infra/providers/implementations/Bank2ProviderAdapter';

export const makeGetAllTransactionsController = (): Controller => {
  // API wrappers
  const bank1AccountSource = new Bank1AccountSource();
  const bank2AccountSource = new Bank2AccountSource();

  // Wrappers injection
  const bank1Provider = new Bank1ProviderAdapter(bank1AccountSource);
  const bank2Provider = new Bank2ProviderAdapter(bank2AccountSource);

  const getAllTransactionsUseCase = new GetAllTransactionsUseCase([
    bank1Provider,
    bank2Provider
  ]);

  return new GetAllTransactionsController(getAllTransactionsUseCase);
};
