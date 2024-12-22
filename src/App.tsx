import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './store/useTimerStore.ts'; // Import store and persistor
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* Wrap with PersistGate to delay rendering until state is rehydrated */}
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  </StrictMode>
);
