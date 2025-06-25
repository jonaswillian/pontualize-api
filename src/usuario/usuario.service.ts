import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @Inject('USUARIO_REPOSITORY')
        private baciaUsuario: Repository<Usuario>,
    ){}

    MensagemInicial():string{
        return "Bem vindo ao módulo de usuário"
    }

    async SelecionarUsuario(username):Promise<Usuario | null>{
        return this.baciaUsuario.findOneBy(username)
    }

    async CadastrarUsuario(dados:UsuarioDto):Promise<Usuario | null>{
        let u = new Usuario()
        u.nome = dados.nome
        u.cpf = dados.cpf
        u.username = dados.username
        u.password = dados.password
        this.baciaUsuario.save(u)
        return u
    }
}
