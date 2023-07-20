import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Link as LinkRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Router } from "./routes/router";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged && <Login changeIsLogged={setIsLogged} />}

      {isLogged && (
        <BrowserRouter>
          <Box h={"100vh"} w={"100vw"}>
            <Flex
              bg="gray.500"
              w="100%"
              h="6rem"
              align="center"
              justify="center"
            >
              <Heading
                as="h1"
                textAlign="center"
                fontSize="5xl"
                color="whiteAlpha.700"
              >
                Contas Web
              </Heading>
            </Flex>

            <Flex h={"100vh"}>
              <Flex bg="gray.700" minW="15rem" justify={"center"}>
                <VStack spacing={4} align="center" py={5} w={"100%"}>
                  <Link
                    as={LinkRouter}
                    to="/home"
                    _hover={{ backgroundColor: "gray" }}
                    w={"100%"}
                    textAlign={"center"}
                  >
                    <Text color={"whiteAlpha.800"} fontSize={"1.35rem"}>
                      Início
                    </Text>
                  </Link>

                  <Link
                    as={LinkRouter}
                    to="/listar/contas"
                    _hover={{ backgroundColor: "gray" }}
                    w={"100%"}
                    textAlign={"center"}
                  >
                    <Text color={"whiteAlpha.800"} fontSize={"1.35rem"}>
                      Listar contas
                    </Text>
                  </Link>

                  <Link
                    as={LinkRouter}
                    to="/cadastrar/contas"
                    _hover={{ backgroundColor: "gray" }}
                    w={"100%"}
                    textAlign={"center"}
                  >
                    <Text color={"whiteAlpha.800"} fontSize={"1.35rem"}>
                      Cadastrar contas
                    </Text>
                  </Link>
                </VStack>
              </Flex>

              <Flex flex="1" bg="gray.300" p={"2rem"}>
                <Router />
              </Flex>
            </Flex>
          </Box>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
