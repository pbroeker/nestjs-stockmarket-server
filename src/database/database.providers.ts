import { Sequelize } from 'sequelize-typescript';

import { User } from '../users/user.entity';
import { Stock } from '../stocks/stock.entity';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case 'development':
          config = databaseConfig.development;
          break;
        case 'test':
          config = databaseConfig.test;
          break;
        case 'production':
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Stock]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
