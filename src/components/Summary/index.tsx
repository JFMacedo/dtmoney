import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      acc.incomes += transaction.amount;
      acc.balance += transaction.amount;
    } else {
      acc.outcomes += transaction.amount;
      acc.balance -= transaction.amount;
    }

    return acc;
  }, {
    incomes: 0,
    outcomes: 0,
    balance: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas"/>
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.incomes) }
        </strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={ outcomeImg } alt="Saídas"/>
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.outcomes) }
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={ totalImg } alt="Saldo"/>
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.balance) }
        </strong>
      </div>
    </Container>
  );
}