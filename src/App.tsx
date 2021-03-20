import { useState } from 'react';

import { TransactionsProvider } from './TransactionsContext';

import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={ handleOpenNewTransactionModal }
      />
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModal }
      />
    </TransactionsProvider>
  );
}