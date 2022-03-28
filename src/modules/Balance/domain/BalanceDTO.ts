import { Balance, BankInfo } from '../../../infra/providers/bank/IBankProvider';

export interface BalanceResponse extends Balance {
  idBank: number;
}

export interface BalanceDTO {
  banks: BankInfo[];
  balances: BalanceResponse[];
}
