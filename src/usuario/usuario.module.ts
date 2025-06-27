import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioController } from './usuario.controller';

@Module({
    imports:[DatabaseModule],    
    providers:[...usuarioProviders, UsuarioService],
    exports:[UsuarioService, ...usuarioProviders],
    controllers:[UsuarioController]
})
export class UsuarioModule {}
