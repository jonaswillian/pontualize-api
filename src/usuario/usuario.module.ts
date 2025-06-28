import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    imports:[DatabaseModule],    
    providers:[...usuarioProviders, UsuarioService, PrismaService],
    exports:[UsuarioService, ...usuarioProviders],
    controllers:[UsuarioController]
})
export class UsuarioModule {}
