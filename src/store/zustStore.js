import { create } from 'zustand';

export const useZustandStore = create((set) => ({
    currTab: "Career",
    setCurrTab: (tabName) => set({ currTab: tabName }),
}));