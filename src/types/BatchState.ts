import Batch from "./Batch";

export default interface BatchState {
  batches: Batch[];
  searchQuery: string;
  isAddModalOpen: boolean;
  setSearchQuery: (query: string) => void;
  setBatches: (batches: Batch[]) => void;
  addBatch: (batch: Batch) => void;
  toggleAddModal: () => void;
};
