import { defineStore } from "pinia";

interface State {
  currentComponent: string,
}

const usePortfolioStore = defineStore("portfolio", {
  state: (): State => ({
    currentComponent: "",
  }),
});

export default usePortfolioStore;
