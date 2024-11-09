import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';
import { TrendingUp, DollarSign, Star, Clock } from 'lucide-react';
import usePredictionStore from '@/store/predictionStore';
import SalesPrediction from '@/types/SalesPrediction';
import TopProduct from '@/types/TopProduct';
import PredictionSummary from '@/types/PredictionSummary';
import AIRecommendation from '@/types/AIRecommendation';
import { Timeframe } from '@/types/PredictionState';

const SalesPredictions = () => {
    const { timeframe, setTimeframe } = usePredictionStore();

    // Sample data - replace with actual data from your API
    const salesData: SalesPrediction[] = [
        { month: 'Ene', actualSales: 4000, prediction: 4000 },
        { month: 'Feb', actualSales: 3200, prediction: 3100 },
        { month: 'Mar', actualSales: 2000, prediction: 2200 },
        { month: 'Abr', actualSales: 2800, prediction: 2900 },
        { month: 'May', actualSales: 1800, prediction: 2000 },
        { month: 'Jun', actualSales: 2400, prediction: 2600 },
        { month: 'Jul', actualSales: null, prediction: 3000 },
        { month: 'Ago', actualSales: null, prediction: 3200 },
        { month: 'Sep', actualSales: null, prediction: 3400 },
    ];

    const topProducts: TopProduct[] = [
        { name: 'Paracetamol 500mg', predictedSales: 14000 },
        { name: 'Amoxicilina 250mg', predictedSales: 11000 },
        { name: 'Ibuprofeno 400mg', predictedSales: 9000 },
        { name: 'Omeprazol 20mg', predictedSales: 7500 },
        { name: 'Loratadina 10mg', predictedSales: 6000 },
    ];

    const summary: PredictionSummary = {
        expectedGrowth: '15%',
        projectedRevenue: '$1,250,000',
        starProduct: {
            name: 'Paracetamol 500mg',
            growth: '20%'
        }
    };

    const recommendations: AIRecommendation[] = [
        {
            id: 1,
            message: 'Considerar aumentar el stock de Paracetamol 500mg en un 15% para el próximo trimestre debido al aumento previsto en la demanda.'
        },
        {
            id: 2,
            message: 'Evaluar la posibilidad de ofrecer descuentos en Loratadina 10mg para impulsar las ventas durante los meses de verano.'
        },
        {
            id: 3,
            message: 'Monitorear de cerca las ventas de Ibuprofeno 400mg, ya que se espera una ligera disminución en la demanda.'
        }
    ];

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Predicciones de ventas</h1>
                <Select value={timeframe} onValueChange={(value: Timeframe) => setTimeframe(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Periodo de tiempo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="monthly">Mensual</SelectItem>
                        <SelectItem value="quarterly">Trimestral</SelectItem>
                        <SelectItem value="yearly">Anual</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Prediction Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                            <TrendingUp className="h-10 w-10 text-green-500" />
                            <div>
                                <p className="text-sm text-gray-500">Crecimiento esperado</p>
                                <p className="text-2xl font-bold">{summary.expectedGrowth}</p>
                                <p className="text-xs text-gray-400">para el próximo trimestre</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                            <DollarSign className="h-10 w-10 text-blue-500" />
                            <div>
                                <p className="text-sm text-gray-500">Ingresos proyectados</p>
                                <p className="text-2xl font-bold">{summary.projectedRevenue}</p>
                                <p className="text-xs text-gray-400">para los próximos 3 meses</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                            <Star className="h-10 w-10 text-yellow-500" />
                            <div>
                                <p className="text-sm text-gray-500">Producto estrella</p>
                                <p className="text-lg font-bold">{summary.starProduct.name}</p>
                                <p className="text-xs text-gray-400">
                                    proyección de {summary.starProduct.growth} de aumento
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col justify-between items-center">
                <h1 className="flex w-full text-2xl font-bold">KPI's (Indicadores)</h1>
                <p className="flex w-full text-lg">
                    Estos indicadores clave de rendimiento (KPI) son métricas que miden el rendimiento de su negocio y le ayudan a evaluar su éxito en el logro de sus objetivos.
                </p>
            </div>

            {/* Sales Trend Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Tendencia de Ventas</CardTitle>
                    <CardDescription>Comparación de ventas reales y predicciones</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="actualSales"
                                    stroke="#8884d8"
                                    name="Ventas Actuales"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="prediction"
                                    stroke="#82ca9d"
                                    name="Predicción"
                                    strokeDasharray="5 5"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
                <CardHeader>
                    <CardTitle>Recomendaciones basadas en IA</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recommendations.map((rec) => (
                            <div key={rec.id} className="flex items-start space-x-3">
                                <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                                <p className="text-gray-600">{rec.message}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Top 5 Products */}
            <Card>
                <CardHeader>
                    <CardTitle>Top 5 Productos (Predicción)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topProducts}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="predictedSales" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SalesPredictions;
