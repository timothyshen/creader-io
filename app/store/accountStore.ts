import { create } from 'zustand'

interface AccountState {
    address: string
    provider: any
    setAddress: (address: string) => void
    removeAddress: () => void
}

export const useWalletStore = create<AccountState>(set => ({
    address: '',
    provider: null,
    setAddress: address => set({ address }),
    removeAddress: () => set({ address: '' }),
}))
