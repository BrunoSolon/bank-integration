import { Controller } from '../../../../core/infra/Controller';
import { fail, HttpResponse, ok } from '../../../../core/infra/HttpResponse';
import { GetAllTransactionsUseCase } from './GetAllTransactionsUseCase';

export class GetAllTransactionsController implements Controller {
  constructor(private getAllTransactionsUseCase: GetAllTransactionsUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const transactions = await this.getAllTransactionsUseCase.execute();

      return ok(transactions);
    } catch (err) {
      return fail(err);
    }
  }
}
