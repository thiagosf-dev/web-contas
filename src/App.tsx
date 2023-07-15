import { useState } from "react";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged && <Login changeIsLogged={setIsLogged} />}

      {isLogged && <Home />}
    </>
  );
}

export default App;
