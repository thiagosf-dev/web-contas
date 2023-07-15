import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { PiUserCircleBold } from "react-icons/pi";
import { MyButton } from "../../components/MyButton/MyButton";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        senha: password,
      });
    } catch (error) {
      console.error("Ocorreu  um erro: ", error);
    }
  }

  function showText() {
    console.log("apertei o botão caracas...");
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Card p={8} rounded={12} bg={"blackAlpha.400"}>
        <CardBody>
          <Flex justify={"center"} mb={8}>
            <Icon as={PiUserCircleBold} color={"purple.500"} boxSize={50} />
          </Flex>
          <Flex flexDir={"column"} gap={6}>
            <FormControl>
              <FormLabel fontSize={"20"} color={"purple.300"}>
                E-mail
              </FormLabel>
              <Input
                placeholder="E-mail"
                color={"blue.500"}
                bg={"ActiveCaption"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize={"20"} color={"purple.300"}>
                Senha
              </FormLabel>
              <Input
                placeholder="Senha"
                color={"blue.500"}
                bg={"ActiveCaption"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>

            <MyButton
              buttonText="Acessar"
              myColorScheme="red"
              myOnClick={handleLogin}
            />

            <MyButton buttonText="Cadastrar" myColorScheme="blue" />

            <MyButton
              buttonText="Limpar"
              myColorScheme="gray"
              myOnClick={clearForm}
            />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
