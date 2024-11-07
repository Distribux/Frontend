export default interface DashboardStore {
    totalEntregas: number;
    inventario: number;
    ventasTotales: number;
    facturasPendientes: number;
    ventasVsEntregas: Array<{
        mes: string;
        ventas: number;
        entregas: number;
    }>;
    pagosRecibidos: Array<{
        dia: string;
        pagos: number;
    }>;
};
