import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import axios from 'axios';
import { AccountType } from './AccountsList';

interface AccountDeleteProps {
  account: AccountType;
  // children?: React.ReactNode;
  closeModal: () => void;
  showModal: boolean;
}

export function AccountDelete({ account, closeModal, showModal }: AccountDeleteProps) {
  async function handleDeleteAccount() {
    try {
      await axios.delete(`http://localhost:3000/conta/${account._id}`);
      closeModal();
    } catch (error) {
      console.error(`Aconteceu um erro: ${error}`);
    }
  }

  return (
    <>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={showModal}
        onClose={() => closeModal()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Exclusão de Conta</Text>
          </ModalHeader>

          <Divider />

          <ModalCloseButton />

          <ModalBody >
            <Text fontWeight={'semibold'} mb={'.5rem'}>Tem certeza que deseja excluir esta conta?</Text>
            <Text>Descrição: {account.descricao}</Text>
            <Text>Valor: R${account.valor}</Text>
          </ModalBody>

          <Divider />

          <ModalFooter display={'flex'} justifyContent={'space-between'}>
            <Button colorScheme='gray' mr={3} onClick={() => closeModal()}>
              Cancelar
            </Button>

            <Button colorScheme='blue' onClick={handleDeleteAccount}>
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}