import { DataSource } from 'typeorm';
import { Usuario } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (banco: DataSource) => banco.getRepository(Usuario),
    inject: ['BANCO'],
  },
];