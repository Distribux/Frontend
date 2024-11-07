import { create } from 'zustand';
import DashboardStore from '@/types/DashboardStore';

const useDashboardStore = create<DashboardStore>(() => ({
    totalEntregas: 1234,
    inventario: 5678,
    ventasTotales: 89420,
    facturasPendientes: 18,
    ventasVsEntregas: [
        { mes: 'Ene', ventas: 4000, entregas: 2400 },
        { mes: 'Feb', ventas: 3000, entregas: 1500 },
        { mes: 'Mar', ventas: 2000, entregas: 9800 },
        { mes: 'Abr', ventas: 2780, entregas: 3908 },
        { mes: 'May', ventas: 1890, entregas: 4800 },
        { mes: 'Jun', ventas: 2390, entregas: 3800 }
    ],
    pagosRecibidos: [
        { dia: 'Lun', pagos: 1200 },
        { dia: 'Mar', pagos: 1900 },
        { dia: 'Mié', pagos: 1500 },
        { dia: 'Jue', pagos: 2000 },
        { dia: 'Vie', pagos: 2400 },
        { dia: 'Sáb', pagos: 1800 },
        { dia: 'Dom', pagos: 1000 }
    ]
}));

export default useDashboardStore;