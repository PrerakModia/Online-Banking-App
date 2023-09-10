import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage";
import AccountPage from "./Components/AccountPage";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <div className="App">
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