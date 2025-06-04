import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import TailwindDesignSystemPage from './pages/tailwind/DesignSystem';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/tailwind/design-system" element={<TailwindDesignSystemPage />} />
    </Routes>
  );
};

export default Router;
