import { useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>

          <tr>
            <td>Salário</td>
            <td className="income">R$ 2.700,00</td>
            <td>Honorários</td>
            <td>05/03/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="outcome">- R$ 650,00</td>
            <td>Casa</td>
            <td>06/03/2021</td>
          </tr>
        </thead>
      </table>
    </Container>
  );
}