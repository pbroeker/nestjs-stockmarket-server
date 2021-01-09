import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TradeStocksDto } from './dto/trade-stocks.dto';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get('get/:user_id/:symbol')
  async findOne(
    @Param('user_id') user_id: number,
    @Param('symbol') symbol: string,
  ) {
    return this.stockService.findOne(user_id, symbol);
  }

  @Get('get/:user_id')
  async findAll(@Param('user_id') user_id: number) {
    return this.stockService.findAll(user_id);
  }

  @Post('buy/:user_id')
  async buyStocks(
    @Param('user_id') user_id: number,
    @Body() stockData: TradeStocksDto,
  ) {
    return this.stockService.buy(user_id, stockData);
  }

  @Post('sell/:user_id')
  async sellStocks(
    @Param('user_id') user_id: number,
    @Body() stockData: TradeStocksDto,
  ) {
    return this.stockService.sell(user_id, stockData);
  }
}
