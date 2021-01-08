import {
  DataType,
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.entity';

@Table
export class Stock extends Model<Stock> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.STRING,
  })
  stockSymbol: string;

  @Column({
    type: DataType.INTEGER,
  })
  shares: number;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @CreatedAt
  creationDate: Date;
}
