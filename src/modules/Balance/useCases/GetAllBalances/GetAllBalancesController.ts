import { Controller } from '../../../../core/infra/Controller';
import { ok, fail, HttpResponse } from '../../../../core/infra/HttpResponse';

import { GetAllBalancesUseCase } from './GetAllBalancesUseCase';

export class GetAllBalancesController implements Controller {
  constructor(private getAllBalancesUseCase: GetAllBalancesUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const balances = await this.getAllBalancesUseCase.execute();

      return ok(balances);
    } catch (err) {
      return fail(err);
    }
  }
}
