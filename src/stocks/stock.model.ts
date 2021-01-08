import {
  DataType,
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

@Table
export class Stock extends Model<Stock> {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  stockSymbol: string;

  @Column
  shares: number;

  @Column
  price: number;

  @Column
  date: string;

  @CreatedAt
  creationDate: Date;
}
