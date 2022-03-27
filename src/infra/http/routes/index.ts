import { Router } from 'express';

import { balanceRoute } from './balance.routes';
import { transactionRoute } from './transaction.routes';

const router = Router();

router.use('/balances', balanceRoute);
router.use('/transactions', transactionRoute);

export { router };
