import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, ShoppingCart, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePriceStore } from '@/store/priceStore';
import PriceData from '@/types/PriceData';
import Product from '@/types/Product';
import PriceAnalysis from '@/types/PriceAnalysis';
import EstimatedImpact from '@/types/EstimatedImpact';
import PriceRecommendation from '@/types/PriceRecommendation';

const PriceManagement = () => {
  const { selectedProduct, setSelectedProduct } = usePriceStore();

  // Sample data - replace with actual data from your API
  const priceData: PriceData[] = [
    { month: 'Ene', ourPrice: 11.2, competitorPrice: 11.4 },
    { month: 'Feb', ourPrice: 11.2, competitorPrice: 11.3 },
    { month: 'Mar', ourPrice: 11.2, competitorPrice: 11.3 },
    { month: 'Abr', ourPrice: 11.2, competitorPrice: 11.2 },
    { month: 'May', ourPrice: 11.2, competitorPrice: 11.3 },
    { month: 'Jun', ourPrice: 11.2, competitorPrice: 11.4 },
  ];

  const products: Product[] = [
    { id: '1', name: 'Paracetamol 500mg' },
    { id: '2', name: 'Amoxicilina 250mg' },
    { id: '3', name: 'Ibuprofeno 400mg' },
    { id: '4', name: 'Omeprazol 20mg' },
    { id: '5', name: 'Loratadina 10mg' },
  ];

  const priceAnalysis: PriceAnalysis = {
    currentPrice: 11.20,
    suggestedPrice: 11.50,
    profitMargin: 15,
  };

  const estimatedImpact: EstimatedImpact = {
    revenueIncrease: '5.2%',
    demandChange: '-1.8%',
    competitivePosition: 'Favorable',
  };

  const recommendations: PriceRecommendation[] = [
    { product: 'Paracetamol 500mg', currentPrice: 11.20, suggestedPrice: 11.50 },
    { product: 'Amoxicilina 250mg', currentPrice: 15.80, suggestedPrice: 16.20 },
    { product: 'Ibuprofeno 400mg', currentPrice: 9.50, suggestedPrice: 9.80 },
    { product: 'Omeprazol 20mg', currentPrice: 14.20, suggestedPrice: 14.00 },
    { product: 'Loratadina 10mg', currentPrice: 8.70, suggestedPrice: 9.00 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fijación de precios</h1>
        <Select 
          value={selectedProduct} 
          onValueChange={setSelectedProduct}
        >
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Seleccionar Producto" />
          </SelectTrigger>
          <SelectContent>
            {products.map((product) => (
              <SelectItem key={product.id} value={product.name}>
                {product.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Trend Chart */}
      <Card>
        <CardContent className="pt-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 12]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="ourPrice" 
                  name="Nuestro Precio"
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitorPrice" 
                  name="Precio Competencia"
                  stroke="#82ca9d" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Price Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis de Precios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Precio Actual:</p>
              <p className="text-2xl font-bold text-gray-700">
                ${priceAnalysis.currentPrice.toFixed(2)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Precio Sugerido:</p>
              <p className="text-2xl font-bold text-green-600">
                ${priceAnalysis.suggestedPrice.toFixed(2)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Margen de Ganancia:</p>
              <p className="text-2xl font-bold text-blue-600">
                {priceAnalysis.profitMargin}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estimated Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Impacto Estimado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Aumento en ingresos:</p>
                <p className="text-lg font-bold text-green-600">
                  {estimatedImpact.revenueIncrease}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShoppingCart className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Cambio en demanda:</p>
                <p className="text-lg font-bold text-blue-600">
                  {estimatedImpact.demandChange}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <BarChart className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Posición competitiva:</p>
                <p className="text-lg font-bold text-purple-600">
                  {estimatedImpact.competitivePosition}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Recommendations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recomendaciones de Precios</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PRODUCTO</TableHead>
                <TableHead className="text-right">PRECIO ACTUAL</TableHead>
                <TableHead className="text-right">PRECIO SUGERIDO</TableHead>
                <TableHead className="text-right">ACCIÓN</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendations.map((item) => (
                <TableRow key={item.product}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell className="text-right">
                    ${item.currentPrice.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.suggestedPrice.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="link" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Ajustar Precio
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceManagement;
