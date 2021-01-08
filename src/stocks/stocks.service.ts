import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Stock } from './stock.model';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel(Stock)
    private stockModel: typeof Stock,
  ) {}
}
