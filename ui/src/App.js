import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import LoginPage from "./components/LoginPage";
import Error from "./pages/ErrorPage";
import CreateAccount from "./pages/CreateAccount";
import RegisterPage from "./components/RegisterPage";

import HomePage from './pages/HomePage';
// import AccountPage from './pages/AccountPage';
import Nav from './components/NavBarComponent';
import AccountStatement from './pages/AccountStatement';
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
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
