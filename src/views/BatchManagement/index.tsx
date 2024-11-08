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
                <TableHead>LABORATORIO</TableHead>
                <TableHead>LOTE</TableHead>
                <TableHead>FECHA DE VENCIMIENTO</TableHead>
                <TableHead>RSN</TableHead>
                <TableHead>CANTIDAD</TableHead>
                <TableHead>CLASE</TableHead>
                <TableHead>CATEGORIA</TableHead>
                <TableHead>PROTOCOLO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBatches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-medium">{batch.product}</TableCell>
                  <TableCell>{batch.laboratory}</TableCell>
                  <TableCell>{batch.batchNumber}</TableCell>
                  <TableCell>{batch.expiryDate}</TableCell>
                  <TableCell>{batch.sanitaryRegister}</TableCell>
                  <TableCell>{batch.quantity.toLocaleString()}</TableCell>
                  <TableCell>{batch.class}</TableCell>
                  <TableCell>{batch.category}</TableCell>
                  <TableCell>
                    
                    <a href={batch.protocol} target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>
                      Ver protocolo
                    </a>
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
