
export interface Tipster {
  id: number;
  name: string;
  units?: Unit[];
  bingos?: number;
  sport?: Sport;
}

export interface Bookmaker {
  id: number;
  name: string;
  bets?: Bet[];
}
  
  export interface Category {
    id: number;
    name: string;
    sport?: Sport;
  }
  
  export interface Competition {
    id: number;
    name: string;
    bets?: Bet[]; // Opcional
  }

  export interface Sport {
    id: number;
    name: string;
    tipsters: Tipster[];
  }
  
  export interface Bet {
    id: number;
    date: Date;
    odds: number;
    stake: number;
    stakeType: string;
    tipster: Tipster | null;
    bookmaker?: Bookmaker;
    category: Category | null;
    competition?: Competition;
    label: string;
    sport: Sport | null;
    // Outros campos conforme necessário
  }
  
  export interface Unit {
    id: number;
    unitValue: number;
    value: number;
    tipster: Tipster;
  }