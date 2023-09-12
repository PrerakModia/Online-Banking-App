import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import Transactions from "./pages/Transactions";
import Nav from "./components/NavBarComponent";
function App() {
  const lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        light: "#fff",
        main: "#Ff0000",
        dark: "#004d40"
      }
    }
  });

  return (
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
   
  );
}

export default App;
