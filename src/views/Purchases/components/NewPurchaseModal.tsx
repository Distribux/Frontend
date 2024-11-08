import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import PurchaseOrder from "@/types/PurchaseOrder";
import PurchaseItem from "@/types/PurchaseItem";
import usePurchaseStore from '@/store/purchaseStore';

interface NewPurchaseModalProps {
  onClose: () => void;
}

const NewPurchaseModal = ({ onClose }: NewPurchaseModalProps) => {
  const { addOrder } = usePurchaseStore();
  const [items, setItems] = useState<Partial<PurchaseItem>[]>([{ 
    productName: '', 
    quantity: 0, 
    unitPrice: 0, 
    total: 0 
  }]);

  const form = useForm({
    defaultValues: {
      supplier: '',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    }
  });

  const addItem = () => {
    setItems([...items, { productName: '', quantity: 0, unitPrice: 0, total: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof PurchaseItem, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    // Recalcular el total del item
    if (field === 'quantity' || field === 'unitPrice') {
      newItems[index].total = (newItems[index].quantity || 0) * (newItems[index].unitPrice || 0);
    }
    
    setItems(newItems);
  };

  const onSubmit = (data: any) => {
    const subtotal = items.reduce((sum, item) => sum + (item.total || 0), 0);
    const tax = subtotal * 0.18; // IGV 18%
    
    const newOrder: PurchaseOrder = {
      id: `OC${Date.now()}`,
      supplierId: 'SUP' + Date.now(),
      supplier: data.supplier,
      date: data.date,
      status: 'Pendiente',
      items: items as PurchaseItem[],
      subtotal,
      tax,
      total: subtotal + tax,
      notes: data.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    addOrder(newOrder);
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Nueva Orden de Compra</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proveedor</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar proveedor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="LAB001">Laboratorios XYZ</SelectItem>
                        <SelectItem value="LAB002">Farmacéutica ABC</SelectItem>
                        <SelectItem value="LAB003">Distribuidora Med</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fecha</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Productos</h3>
                <Button type="button" variant="outline" onClick={addItem}>
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Producto
                </Button>
              </div>

              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 items-end">
                  <div className="col-span-2">
                    <FormLabel>Producto</FormLabel>
                    <Select
                      onValueChange={(value) => updateItem(index, 'productName', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar producto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Paracetamol 500mg">Paracetamol 500mg</SelectItem>
                        <SelectItem value="Amoxicilina 250mg">Amoxicilina 250mg</SelectItem>
                        <SelectItem value="Ibuprofeno 400mg">Ibuprofeno 400mg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <FormLabel>Cantidad</FormLabel>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <FormLabel>Precio Unit.</FormLabel>
                    <Input
                      type="number"
                      step="0.01"
                      value={item.unitPrice}
                      onChange={(e) => updateItem(index, 'unitPrice', Number(e.target.value))}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Input
                      disabled
                      value={item.total?.toFixed(2)}
                      className="bg-gray-50"
                    />
                    {items.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="text-red-500"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notas</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Notas adicionales..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit">
                Crear Orden
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default NewPurchaseModal;
