import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { AccountsList } from "../pages/Accounts/AccountsList";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/listar/contas" element={<AccountsList />} />
    </Routes>
  );
}
