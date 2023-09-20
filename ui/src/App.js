import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import LoginPage from "./components/LoginPage";
import Error from "./pages/ErrorPage";
import CreateAccount from "./pages/CreateAccount";
import RegisterPage from "./components/RegisterPage";
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteAccount';
import HomePage from './pages/HomePage';
// import AccountPage from './pages/AccountPage';
import Nav from './components/NavBarComponent';
import AccountStatement from './pages/AccountStatement';
import Withdraw from './pages/Withdraw';
import AdminTransactions from './components/AdminTransactions';
import DisableAccount from './components/DisableAccount';
import Admin from './pages/AdminPortal';
import EditAccount from './components/EditUser';
function App() {
  const lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        light: "#fff",
        main: "#Ff0000",
        dark: "#004d40",
      },
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        {/* <Nav /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/accountstatement" element={<AccountStatement />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/deleteuser" element={<DeleteUser />} />
            <Route path="/disable" element={<DisableAccount />} />
            <Route path="/editaccount" element={<EditAccount />} />
            <Route path="/admintransactions" element={<AdminTransactions />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
