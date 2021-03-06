export interface PairUpdate {
  pair: Pair;
  vwapUpdate?: VWAPUpdate;
  performanceUpdate?: PerformanceUpdate;
  trendlineUpdate?: TrendlineUpdate;
}

export interface Pair {
  id: number;
}

export interface VWAPUpdate {
  vwap: string;
  timestamp: Date;
}

export interface PerformanceUpdate {
  window: string;
  performance: string;
}

export interface TrendlineUpdate {
  window: string;
  timestamp: Date;
  price: string;
  volume: string;
}
