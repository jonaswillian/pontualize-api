import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'BANCO',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'pontualize',
        entities: [
          __dirname + '/../usuario/usuario.entity.js',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];