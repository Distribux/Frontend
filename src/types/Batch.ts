export default interface Batch {
    id: string;
    product: string;
    laboratory: string;
    batchNumber: string;
    expiryDate: string;
    sanitaryRegister: string;
    quantity: number;
    class: string;
    category: string;
    protocol: string;
    status: 'active' | 'expiring-soon' | 'expired';
};
