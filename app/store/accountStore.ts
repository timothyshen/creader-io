import { create } from "zustand";

interface AccountState {
  address: string;
  setAddress: (address: string) => void;
  removeAddress: () => void;
}

export const useWalletStore = create<AccountState>((set) => ({
  address: "",
  setAddress: (address) => set({ address }),
  removeAddress: () => set({ address: "" }),
}));
