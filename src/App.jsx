import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CitizensPage from './pages/CitizensPage';
import Layout from './components/Layout/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/citizens" element={<CitizensPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}