export enum Timeframe {
    Monthly = 'monthly',
    Quarterly = 'quarterly',
    Yearly = 'yearly',
};

export default interface PredictionState {
    timeframe: Timeframe;
    setTimeframe: (timeframe: Timeframe) => void;
};
