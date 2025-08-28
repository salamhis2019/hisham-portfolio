import { defineStore } from 'pinia';
import type { PortfolioState } from '@/types/store.types';

const usePortfolioStore = defineStore('portfolio', {
  state: (): PortfolioState => ({
    currentComponent: '',
  }),
});

export default usePortfolioStore;
