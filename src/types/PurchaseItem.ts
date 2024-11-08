export default interface PurchaseItem {
    id: string;
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    total: number;
    lotNumber?: string;
    expirationDate?: string;
}