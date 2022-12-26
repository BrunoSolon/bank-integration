import { Controller } from '../../../../core/infra/Controller';
import { ok, fail, HttpResponse } from '../../../../core/infra/HttpResponse';

import { GetAllBalancesUseCase } from './GetAllBalancesUseCase';
import { BalanceDTO } from '../../domain/BalanceDTO';

export class GetAllBalancesController implements Controller {
  constructor(private getAllBalancesUseCase: GetAllBalancesUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const balances: BalanceDTO = await this.getAllBalancesUseCase.execute();

      return ok<BalanceDTO>(balances);
    } catch (err) {
      return fail(err);
    }
  }
}
