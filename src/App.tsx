import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { Layout } from '@components/Layout';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { LoanPage } from '@/pages/LoanPage';
import { ApplicationPage } from '@/pages/ApplicationPage';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.loan} element={<LoanPage />} />
        <Route path={ROUTES.application} element={<ApplicationPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
