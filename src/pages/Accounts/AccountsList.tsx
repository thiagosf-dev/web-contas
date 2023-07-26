import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Center,
  Divider,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AccountEdit } from "./AccountEdit";

export interface AccountType {
  _id: string;
  descricao: string;
  estaPaga: boolean;
  valor: number;
  dataVencimento: string;
  tipo: "Despesa" | "Receita";
}

export function AccountsList() {
  // useState => variável, função que altera a variável
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [accountSelected, setAccountSelected] = useState({} as AccountType)

  async function callRequest() {
    setLoading(true);
    const response = await axios.get("http://localhost:3000/conta");
    setAccounts(response.data);
    setLoading(false);
  }

  // é um hook do React de efeito colateral,
  // que será executado sempre antes do fim
  // do ciclo de renderização do componente
  useEffect(() => {
    callRequest();
  }, []);

  // useEffect(() => {
  //   console.log("alterou o valor da variável com sucesso");
  // }, [loading]);

  function handleEditAccount(account: AccountType) {
    setShowTable(false);
    setAccountSelected(account);
  }

  return (
    <>
      {loading && <h1>CARREGANDO</h1>}

      {/* <Button onClick={callRequest}>PESQUISAR CONTAS</Button> */}

      {
        !loading && showTable && (
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
                  <Th textAlign={'center'}>AÇÕES</Th>
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
                    <Td>
                      <Center height='20px' display={'flex'} gap={'.5rem'}>
                        <Tooltip hasArrow label='Editar conta' fontSize='md' placement='top'>
                          <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<EditIcon />}
                            onClick={() => handleEditAccount(account)}
                          />
                        </Tooltip>

                        <Divider orientation='vertical' />

                        <Tooltip hasArrow label='Excluir conta' fontSize='md' placement='top'>
                          <IconButton
                            colorScheme='red'
                            aria-label='Search database'
                            icon={<DeleteIcon />}
                          />
                        </Tooltip>
                      </Center>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )
      }

      {
        !loading && !showTable && (
          <AccountEdit
            onClickChangeShowTable={() => setShowTable(true)}
            account={accountSelected}
          />
        )
      }
    </>
  );
}
