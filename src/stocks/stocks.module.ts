import { Module } from '@nestjs/common';

import { StocksController } from './stocks.controller';
import { stocksProviders } from './stocks.provider';
import { StocksService } from './stocks.service';

@Module({
  providers: [StocksService, ...stocksProviders],
  controllers: [StocksController],
  exports: [StocksService],
})
export class StocksModule {}
