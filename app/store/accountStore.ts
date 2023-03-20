import create from "zustand";

interface AccountState {
  address: string;
  setAddress: (_address: string) => void;
}

// generate store code
const useWalletStore = create<AccountState>((set) => ({
  address: "",
  setAddress: (address) => set({ address }),
}));

export const useWalletAddress = () => {
  useWalletStore((state) => state.address);
};

export const useSetWalletAddress = () => {
  useWalletStore((state) => state.setAddress);
};
