import { createContext, useContext } from 'react';
import LoadingStore from './modules/loading';
import ToastStore from './modules/toast';

export const stores = { LoadingStore, ToastStore };

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);
