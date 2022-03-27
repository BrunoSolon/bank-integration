import { Router } from 'express';

import { makeGetAllTransactionsController } from '../../../modules/Transaction/useCases/GetAllTransactions';
import { adaptRoute } from '../../../core/infra/adapters/ExpressRouteAdapter';

const transactionRoute = Router();

transactionRoute.get('/', adaptRoute(makeGetAllTransactionsController()));

export { transactionRoute };
