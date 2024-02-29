import React from 'react';
import './App.css'
import { Header } from './comp/Header';
import { Balance} from './comp/Balance';
import { IncomeExpense } from './comp/IncomeExpense';
import { TransactionList } from './comp/TransactionList';
import {AddTransaction} from  './comp/AddTransaction'
import { GlobelProvider } from './context/GlobelState';
function App() {
  

  return (
   <GlobelProvider>
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
   </GlobelProvider>
    
  );
}

export default App;

