import { createRoot } from 'react-dom/client';

import { App } from './app/App.tsx';

createRoot(document.getElementById('pixi-container')!).render(<App />);
