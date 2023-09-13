import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import Transactions from './pages/Transactions';
import LoginPage from './components/LoginPage';
import Nav from './components/NavBarComponent';
import Error from './pages/ErrorPage';
import CreateAccount from './pages/CreateAccount';
function App() {
  const lightTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#fff',
        main: '#Ff0000',
        dark: '#004d40',
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
            <Route path="/account" element={<AccountPage />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
