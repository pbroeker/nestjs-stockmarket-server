import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TradeStocksDto } from './dto/trade-stocks.dto';

@Controller('stocks')
export class StocksController {
  @Get(':symbol')
  findOne(@Param('symbol') symbol): string {
    return `Looking for stock with symbol ${symbol}`;
  }

  @Post('buy')
  buyStocks(@Body() tradeStocksDto: TradeStocksDto): string {
    return `Bought stocks. Name: ${tradeStocksDto.stockSymbol}, number: ${tradeStocksDto.shares}, price: ${tradeStocksDto.price}, date: ${tradeStocksDto.date}.`;
  }

  @Post('sell')
  sellStocks(@Body() tradeStocksDto: TradeStocksDto): string {
    return `Sold stocks. Name: ${tradeStocksDto.stockSymbol}, number: ${tradeStocksDto.shares}, price: ${tradeStocksDto.price}, date: ${tradeStocksDto.date}.`;
  }
}
