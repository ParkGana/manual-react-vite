import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './styles/theme';
import { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  }, []);

  /* 테마 변경 */
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
        <div className="w-fit border-2 border-gray-500 p-2 mt-5 mx-auto cursor-pointer" onClick={handleToggleTheme}>
          {theme.toLocaleUpperCase()}
        </div>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
