import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface AccountType {
  _id: string;
  descricao: string;
  estaPaga: boolean;
  valor: number;
  dataVencimento: string;
  tipo: "Despesa" | "Receita";
}

export function AccountsList() {
  const [accounts, setAccounts] = useState<AccountType[]>([]);

  async function callRequest() {
    const response = await axios.get("http://localhost:3000/conta");
    console.log("response :>> ", response);
    setAccounts(response.data);
  }

  useEffect(() => {
    callRequest();
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Listagem de Contas Cadastradas</TableCaption>
        <Thead>
          <Tr>
            <Th>DESCRIÇÃO</Th>
            <Th isNumeric>VALOR</Th>
            <Th>TIPO</Th>
            <Th>PAGA?</Th>
            <Th>VENCIMENTO</Th>
          </Tr>
        </Thead>
        <Tbody>
          {accounts.map((account) => (
            <Tr>
              <Td>{account.descricao}</Td>
              <Td>{account.valor}</Td>
              <Td>{account.tipo}</Td>
              <Td>{account.estaPaga ? "Sim" : "Não"}</Td>
              <Td>{account.dataVencimento}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
