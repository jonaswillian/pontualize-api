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

    async logarUsuario(x):Promise<Usuario | null>{
        return this.baciaUsuario.findOne({
            where: {
                username : x
            }
        })
    }

    CadastrarUsuario(dados:UsuarioDto):string{
        let u = new Usuario()
        u.nome = dados.nome
        u.cpf = dados.cpf
        u.username = dados.username
        u.password = dados.password
        this.baciaUsuario.save(u)
        return "Salvou com sucesso"
    }
}
