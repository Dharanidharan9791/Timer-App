import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage by default
import { Timer } from '../types/timer';

// Initial State
const initialState = {
  timers: [] as Timer[],
};

// Timer Slice
const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.timers.push({
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      });
    },
    deleteTimer: (state, action) => {
      state.timers = state.timers.filter(timer => timer.id !== action.payload);
    },
    toggleTimer: (state, action) => {
      const timer = state.timers.find(timer => timer.id === action.payload);
      if (timer) {
        timer.isRunning = !timer.isRunning;
      }
    },
    updateTimer: (state) => {
      state.timers = state.timers.map(timer => {
        if (timer.isRunning && timer.remainingTime > 0) {
          return { ...timer, remainingTime: timer.remainingTime - 1 };
        }
        return timer;
      });
    },
    restartTimer: (state, action) => {
      const timer = state.timers.find(timer => timer.id === action.payload);
      if (timer) {
        timer.remainingTime = timer.duration;
        timer.isRunning = false;
      }
    },
    editTimer: (state, action) => {
      const timer = state.timers.find(timer => timer.id === action.payload.id);
      if (timer) {
        Object.assign(timer, action.payload.updates);
        timer.remainingTime = action.payload.updates.duration || timer.duration;
        timer.isRunning = false;
      }
    },
  },
});

// Redux Persist Config
const persistConfig = {
  key: 'root', // Key for the localStorage entry
  storage,     // Use localStorage
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, timerSlice.reducer);

// Configure Store
const store = configureStore({
  reducer: persistedReducer,
});

// Persistor
const persistor = persistStore(store);

// Export Store and Persistor
export { store, persistor };

// Export Actions
export const {
  addTimer,
  deleteTimer,
  toggleTimer,
  updateTimer,
  restartTimer,
  editTimer,
} = timerSlice.actions;

// Custom Hook for Timer Store
export const useTimerStore = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state: { timers: Timer[] }) => state.timers);

  return {
    timers,
    addTimer: (timer: Omit<Timer, 'id' | 'createdAt'>) => dispatch(addTimer(timer)),
    deleteTimer: (id: string) => dispatch(deleteTimer(id)),
    toggleTimer: (id: string) => dispatch(toggleTimer(id)),
    updateTimer: () => dispatch(updateTimer()),
    restartTimer: (id: string) => dispatch(restartTimer(id)),
    editTimer: (id: string, updates: Partial<Timer>) => dispatch(editTimer({ id, updates })),
  };
};
