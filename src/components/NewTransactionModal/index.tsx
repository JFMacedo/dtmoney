import { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, TypeButton } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactoinModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactoinModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('');

    onRequestClose();
  }

  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={ onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={ onRequestClose }
          className="react-modal-close"
        >
          <img src={ closeImg } alt="Fechar modal"/>
        </button>

        <Container onSubmit={ handleCreateNewTransaction }>
          <h2>Cadastrar transação</h2>

          <input
            type="text"
            placeholder="Título"
            value={ title }
            onChange={ event => setTitle(event.target.value) }
          />

          <input
            type="number"
            placeholder="Valor"
            value={ amount }
            onChange={ event => setAmount(Number(event.target.value)) }
          />

          <TransactionTypeContainer>
            <TypeButton
              type="button"
              onClick={ () => { setType('income') } }
              isActive={ type === 'income' }
              activeColor="green"
            >
              <img src={ incomeImg } alt="Entrada"/>
              <span>Entrada</span>
            </TypeButton>

            <TypeButton
              type="button"
              onClick={ () => { setType('outcome') } }
              isActive={ type === 'outcome' }
              activeColor="red"
            >
              <img src={ outcomeImg } alt="Saída"/>
              <span>Saída</span>
            </TypeButton>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            value={ category }
            onChange={ event => setCategory(event.target.value) }
          />

          <button
            type="submit"
            disabled={ type === '' }
          >
            Cadastrar
          </button>
        </Container>
      </Modal>
  );
}