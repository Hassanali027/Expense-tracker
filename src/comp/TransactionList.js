import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobelContext } from '../context/GlobelState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobelContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}


