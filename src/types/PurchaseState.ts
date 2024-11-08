import PurchaseOrder from '@/types/PurchaseOrder';
import PurchaseStats from '@/types/PurchaseStats';

export default interface PurchaseState {
    orders: PurchaseOrder[];
    stats: PurchaseStats;
    isModalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    addOrder: (order: PurchaseOrder) => void;
    updateOrder: (id: string, order: Partial<PurchaseOrder>) => void;
    deleteOrder: (id: string) => void;
}