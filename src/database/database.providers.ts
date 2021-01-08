import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Stock } from '../stocks/stock.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'stock',
        database: 'stockmarketapp',
      });
      sequelize.addModels([User, Stock]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
