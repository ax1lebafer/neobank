import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { ReduxProvider } from '@/store/ReduxProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
