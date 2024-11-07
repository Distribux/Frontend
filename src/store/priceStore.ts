import { create } from 'zustand';
import PriceState from '@/types/PriceState';

export const usePriceStore = create<PriceState>((set) => ({
  selectedProduct: 'Paracetamol 500mg',
  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
}));