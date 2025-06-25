import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.providers';

@Module({
    imports:[DatabaseModule],    
    providers:[...usuarioProviders, UsuarioService]
})
export class UsuarioModule {}
