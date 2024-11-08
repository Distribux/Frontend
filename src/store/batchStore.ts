import BatchState from '@/types/BatchState';
import { create } from 'zustand';

export const useBatchStore = create<BatchState>((set) => ({
    batches: [
        {
            id: '1',
            product: 'Paracetamol',
            laboratory: 'Bayer',
            batchNumber: '123456',
            expiryDate: '2023-12-31',
            quantity: 1000,
            sanitaryRegister: 'JASK',
            class: 'A',
            category: 'generic',
            protocol: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            status: 'active',
        },
        {
            id: '2',
            product: 'Paracetamol',
            laboratory: 'Bayer',
            batchNumber: '123456',
            expiryDate: '2023-12-31',
            quantity: 1000,
            sanitaryRegister: 'JASK',
            class: 'A',
            category: 'generic',
            protocol: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            status: 'active',
        },
        {
            id: '3',
            product: 'Paracetamol',
            laboratory: 'Bayer',
            batchNumber: '123456',
            expiryDate: '2023-12-31',
            quantity: 1000,
            sanitaryRegister: 'JASK',
            class: 'A',
            category: 'generic',
            protocol: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            status: 'active',
        }
    ],
    searchQuery: '',
    isAddModalOpen: false,
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    setBatches: (batches) => set({ batches }),
    addBatch: (batch) => set((state) => ({ batches: [...state.batches, batch] })),
    toggleAddModal: () => set((state) => ({ isAddModalOpen: !state.isAddModalOpen })),
}));