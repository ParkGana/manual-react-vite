import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import TailwindDesignSystemPage from './pages/tailwind/DesignSystem';
import StyledDesignSystemPage from './pages/styled/DesignSystem';
import TailwindTodoPage from './pages/tailwind/Todo';
import StyledTodoPage from './pages/styled/Todo';
import TailwindPokemonPage from './pages/tailwind/Pokemon';
import StyledPokemonPage from './pages/styled/Pokemon';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/tailwind/design-system" element={<TailwindDesignSystemPage />} />
      <Route path="/tailwind/todo" element={<TailwindTodoPage />} />
      <Route path="/tailwind/pokemon" element={<TailwindPokemonPage />} />

      <Route path="/styled/design-system" element={<StyledDesignSystemPage />} />
      <Route path="/styled/todo" element={<StyledTodoPage />} />
      <Route path="/styled/pokemon" element={<StyledPokemonPage />} />
    </Routes>
  );
};

export default Router;
