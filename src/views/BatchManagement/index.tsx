import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardHeader, 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, AlertTriangle } from 'lucide-react';
import { useBatchStore } from '@/store/batchStore';
import AddBatchModal from './components/AddBatchModal';

const BatchManagement = () => {
  const { 
    batches, 
    searchQuery, 
    isAddModalOpen,
    setSearchQuery, 
    toggleAddModal 
  } = useBatchStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expiring-soon':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'expiring-soon':
        return 'Próximo a vencer';
      case 'expired':
        return 'Vencido';
      default:
        return status;
    }
  };

  const filteredBatches = batches.filter(batch => 
    batch.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    batch.batchNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const expiringBatches = batches.filter(batch => 
    batch.status === 'expiring-soon'
  ).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestión de lotes</h1>
        <Button onClick={toggleAddModal}>Agregar Nuevo Lote</Button>
      </div>

      {expiringBatches > 0 && (
        <Alert variant="destructive" className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription>
            Hay {expiringBatches} lotes próximos a vencer. Se recomienda tomar acción inmediata.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por producto o lote"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>PRODUCTO</TableHead>
                <TableHead>LOTE</TableHead>
                <TableHead>FECHA DE VENCIMIENTO</TableHead>
                <TableHead>CANTIDAD</TableHead>
                <TableHead>ESTADO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBatches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-medium">{batch.product}</TableCell>
                  <TableCell>{batch.batchNumber}</TableCell>
                  <TableCell>{batch.expiryDate}</TableCell>
                  <TableCell>{batch.quantity.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(batch.status)}`}>
                      {getStatusText(batch.status)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AddBatchModal 
        open={isAddModalOpen} 
        onClose={toggleAddModal}
      />
    </div>
  );
};

export default BatchManagement;
