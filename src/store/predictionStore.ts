import { create } from 'zustand';
import PredictionState, { Timeframe } from '@/types/PredictionState';

const usePredictionStore = create<PredictionState>((set) => ({
    timeframe: Timeframe.Monthly,
    setTimeframe: (timeframe: Timeframe) => set({ timeframe }),
}));

export default usePredictionStore;
