import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { MotionProvider } from './context/MotionContext';
import { CursorProvider } from './context/CursorContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MotionProvider>
          <CursorProvider>
            <App />
          </CursorProvider>
        </MotionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);