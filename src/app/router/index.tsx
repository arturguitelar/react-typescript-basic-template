import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
