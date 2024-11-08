import { create } from 'zustand';
import PurchaseState from '@/types/PurchaseState';

const usePurchaseStore = create<PurchaseState>((set) => ({
    orders: [
        {
            id: 'OC2024001',
            supplierId: 'SUP001',
            supplier: 'Laboratorios XYZ',
            date: '2024-01-15',
            status: 'Pendiente',
            items: [
                {
                    id: 'ITEM001',
                    productId: 'PROD001',
                    productName: 'Paracetamol 500mg',
                    quantity: 1000,
                    unitPrice: 8.5,
                    total: 8500
                }
            ],
            subtotal: 8500,
            tax: 1530,
            total: 12500,
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 'OC2024002',
            supplierId: 'SUP001',
            supplier: 'Laboratorios XYZ',
            date: '2024-01-15',
            status: 'Pendiente',
            items: [
                {
                    id: 'ITEM001',
                    productId: 'PROD001',
                    productName: 'Paracetamol 500mg',
                    quantity: 1000,
                    unitPrice: 8.5,
                    total: 8500
                }
            ],
            subtotal: 8500,
            tax: 1530,
            total: 12500,
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 'OC2024003',
            supplierId: 'SUP001',
            supplier: 'Laboratorios XYZ',
            date: '2024-01-15',
            status: 'Pendiente',
            items: [
                {
                    id: 'ITEM001',
                    productId: 'PROD001',
                    productName: 'Paracetamol 500mg',
                    quantity: 1000,
                    unitPrice: 8.5,
                    total: 8500
                }
            ],
            subtotal: 8500,
            tax: 1530,
            total: 12500,
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z'
        },
    ],
    stats: {
        monthlyOrders: 24,
        monthlyGrowth: 12,
        totalPurchases: 45800,
        purchasesGrowth: 8.2,
        pendingProducts: 12,
        activeOrders: 5
    },
    isModalOpen: false,
    setModalOpen: (open) => set({ isModalOpen: open }),
    addOrder: (order) => set((state) => ({
        orders: [...state.orders, order]
    })),
    updateOrder: (id, updatedOrder) => set((state) => ({
        orders: state.orders.map((order) =>
            order.id === id ? { ...order, ...updatedOrder } : order
        )
    })),
    deleteOrder: (id) => set((state) => ({
        orders: state.orders.filter((order) => order.id !== id)
    })),
}));

export default usePurchaseStore;
