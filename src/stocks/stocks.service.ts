import { Injectable, Inject } from '@nestjs/common';

import { Stock } from './stock.entity';

@Injectable()
export class StocksService {
  constructor(
    @Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock,
  ) {}
}
