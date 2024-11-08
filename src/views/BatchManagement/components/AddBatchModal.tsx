import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useBatchStore } from '@/store/batchStore';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';

interface AddBatchModalProps {
  open: boolean;
  onClose: () => void;
}

const emptyBatch = {
  product: '',
  laboratory: '',
  batchNumber: '',
  expiryDate: '',
  sanitaryRegister: '',
  quantity: '',
  class: '',
  category: '',
  protocol: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
};

const AddBatchModal = ({ open, onClose }: AddBatchModalProps) => {
  const { addBatch } = useBatchStore();
  const [formData, setFormData] = React.useState(emptyBatch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBatch({
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      quantity: parseInt(formData.quantity),
      status: 'active',
    });
    onClose();
    setFormData(emptyBatch);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Lote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product">Producto</Label>
            <Input
              id="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="laboratory">Laboratorio</Label>
            <Input
              id="laboratiry"
              value={formData.laboratory}
              onChange={(e) => setFormData({ ...formData, laboratory: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="batchNumber">Número de Lote</Label>
            <Input
              id="batchNumber"
              value={formData.batchNumber}
              onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sanitaryRegister">Registro sanitario</Label>
            <Input
              id="sanitaryRegister"
              value={formData.sanitaryRegister}
              onChange={(e) => setFormData({ ...formData, sanitaryRegister: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Cantidad</Label>
            <Input
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="class">Clase</Label>
            <Select onValueChange={(e) => setFormData({ ...formData, class: e })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una clase" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Clases</SelectLabel>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select onValueChange={(e) => setFormData({ ...formData, category: e })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categoria</SelectLabel>
                  <SelectItem value="generic">Genérico</SelectItem>
                  <SelectItem value="commercial">Comercial</SelectItem>
                  <SelectItem value="controlled">Controlado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Guardar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBatchModal;
