import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
