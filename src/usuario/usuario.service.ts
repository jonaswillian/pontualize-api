import { Injectable, Inject } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Usuario } from 'generated/prisma';

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    MensagemInicial():string{
        return "Bem vindo ao módulo de usuário"
    }

    async logarUsuario(x):Promise<Usuario |  null>{
        return this.prisma.usuario.findUnique({
            where: {
                username : x
            }
        })
    }

    async CadastrarUsuario(dados:UsuarioDto): Promise<string>{
        await this.prisma.usuario.create({data: dados})
        return "Usuário criado com sucesso"
    }
}
