import React,{useContext} from 'react'
import {GlobelContext} from '../context/GlobelState'
export const Balance = () => {
  const { transactions } = useContext(GlobelContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
    <h4>your Balance</h4>
    <h1 >${total}</h1>
</>
  )
}
