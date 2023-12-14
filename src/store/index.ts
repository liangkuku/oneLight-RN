import { createContext, useContext } from 'react';
import LoadingStore from './modules/loading';
import ToastStore from './modules/toast';
import TestStore from './modules/test';

export const stores = { LoadingStore, ToastStore, TestStore };

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);
