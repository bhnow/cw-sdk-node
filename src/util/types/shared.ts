export interface OrderBookSnapshot {
  seqNum: number;
  bids: PublicOrder[];
  asks: PublicOrder[];
}

export type OrderBookState = {
  inSync: boolean;
  seqNum: number;
  minDeltaNum: number;
  maxDeltaNum: number;
};

export interface OrderBookDelta {
  seqNum: number;
  bids: OrderDeltas;
  asks: OrderDeltas;
}

export interface OrderDeltas {
  set: PublicOrder[];
  remove: string[];
}

export interface PublicOrder {
  price: string;
  amount: string;
}

export type Instrument = {
  id: number;
  base: Asset;
  quote: Asset;
};

export type Exchange = {
  id: number;
  symbol: string;
};

export type Market = {
  id: number;
  exchange: Exchange;
  instrument: Instrument;
};

export type Asset = {
  id: number;
  symbol: string;
};

export type DeltaItem = {
  action: 'set' | 'remove';
  order: PublicOrder;
  index: number;
  overridden: boolean;
};

export type MarketSymbol = {
  exchange: string;
  base: string;
  quote: string;
};

export type MarketSelector = MarketSymbol | number;
