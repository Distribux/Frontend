export default interface Batch {
    id: string;
    product: string;
    batchNumber: string;
    expiryDate: string;
    quantity: number;
    status: 'active' | 'expiring-soon' | 'expired';
};
