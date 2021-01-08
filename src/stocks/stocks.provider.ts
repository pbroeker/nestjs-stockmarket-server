import { Stock } from './stock.entity';

export const stocksProviders = [
  {
    provide: 'STOCK_REPOSITORY',
    useValue: Stock,
  },
];
