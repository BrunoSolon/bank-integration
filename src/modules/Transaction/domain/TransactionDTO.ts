import { BankInfo, Transaction } from '../../../infra/providers/IBankProvider';

export interface TransactionResponse {
  idBank: number;
  transactions: Transaction[];
}

export interface TransactionDTO {
  banks: BankInfo[];
  transactions: TransactionResponse[];
}
