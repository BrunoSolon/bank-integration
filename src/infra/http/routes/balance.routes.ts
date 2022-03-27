import { Router } from 'express';
import { makeGetAllBalancesController } from '../../../modules/Balance/useCases/GetAllBalances';
import { adaptRoute } from '../../../core/infra/adapters/ExpressRouteAdapter';

const balanceRoute = Router();

balanceRoute.get('/', adaptRoute(makeGetAllBalancesController()));

export { balanceRoute };
