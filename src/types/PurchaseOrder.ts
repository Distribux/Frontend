import PurchaseItem from "./PurchaseItem";

export default interface PurchaseOrder {
    id: string;
    supplierId: string;
    supplier: string;
    date: string;
    status: 'Pendiente' | 'En tránsito' | 'Entregado' | 'Cancelado';
    items: PurchaseItem[];
    subtotal: number;
    tax: number;
    total: number;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}