export type SymbolType = 'regular' | 'wild' | 'bonus';

export interface SlotSymbol {
  id: string;
  name: string;
  image: string;
  type: SymbolType;
  weight: number;
  payouts?: { [count: number]: number };
}
