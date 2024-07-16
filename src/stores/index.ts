import { mountStoreDevtool } from 'simple-zustand-devtools';
import { useAuthStore } from './auth.store';

mountStoreDevtool("auth-store", useAuthStore);

export { useAuthStore };