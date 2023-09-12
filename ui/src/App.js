import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import Transactions from "./pages/Transactions";
import Nav from "./components/NavBarComponent";
function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/transaction" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
