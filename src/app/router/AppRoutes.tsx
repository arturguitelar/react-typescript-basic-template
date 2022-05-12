import HomePage from 'pages/HomePage';
import { Status404Page } from 'pages/Status404Page';
import { Route, Routes } from 'react-router-dom';

import { appPaths } from './appPaths';

// Lazy imports
// const SomeLazyPage = React.lazy(() => import('pages/admin/SomeLazyPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appPaths.home} element={<HomePage />} />

      <Route path="*" element={<Status404Page />} />
    </Routes>
  );
};
