import { Injectable, Inject } from '@nestjs/common';

import { Stock } from './stock.entity';
import { TradeStocksDto } from './dto/trade-stocks.dto';

@Injectable()
export class StocksService {
  constructor(
    @Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock,
  ) {}

  async findAll(id: number): Promise<Stock[]> {
    return await this.stockRepository.findAll({
      where: { user_id: id },
    });
  }

  async findOne(id: number, symbol: string): Promise<Stock[]> {
    return await this.stockRepository.findAll({
      where: { stockSymbol: symbol, user_id: id },
    });
  }

  async buy(id: number, stockData: TradeStocksDto): Promise<Stock> {
    return await this.stockRepository.create({ ...stockData, user_id: id });
  }

  async sell(id: number, stockData: TradeStocksDto): Promise<Stock> {
    return await this.stockRepository.create({ ...stockData, user_id: id });
  }
}
