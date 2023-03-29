import { useDispatch } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/slice'
import userReducer from './user/slice'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type TypeRootState = ReturnType<typeof store.getState>

export * from './user'
export * from './cart'
export * from './hooks'
