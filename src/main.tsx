import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { ReduxProvider } from '@/store/ReduxProvider';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <SkeletonTheme baseColor="#b5b4b4" highlightColor="#f5f5f5">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SkeletonTheme>
    </ReduxProvider>
  </StrictMode>
);
