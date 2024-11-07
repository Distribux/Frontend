import BatchState from '@/types/BatchState';
import { create } from 'zustand';

export const useBatchStore = create<BatchState>((set) => ({
    batches: [],
    searchQuery: '',
    isAddModalOpen: false,
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    setBatches: (batches) => set({ batches }),
    addBatch: (batch) => set((state) => ({ batches: [...state.batches, batch] })),
    toggleAddModal: () => set((state) => ({ isAddModalOpen: !state.isAddModalOpen })),
}));