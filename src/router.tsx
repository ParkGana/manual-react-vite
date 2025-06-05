import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import TailwindDesignSystemPage from './pages/tailwind/DesignSystem';
import StyledDesignSystemPage from './pages/styled/DesignSystem';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/tailwind/design-system" element={<TailwindDesignSystemPage />} />

      <Route path="/styled/design-system" element={<StyledDesignSystemPage />} />
    </Routes>
  );
};

export default Router;
