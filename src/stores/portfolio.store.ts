import { defineStore } from 'pinia';

interface State {
  currentComponent: any;
}

const usePortfolioStore = defineStore('portfolio', {
  state: (): State => ({
    currentComponent: '',
  }),
});

export default usePortfolioStore;
