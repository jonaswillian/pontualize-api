import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuario.dto';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly us:UsuarioService){}

    @Get()
    x1():string{
        return this.us.MensagemInicial()
    }

    @Get("selecionar/:aaa")
    x2(@Param('aaa') username:string){
        return this.us.logarUsuario(username)
    }

    @Post("cadastrar")
    x3(@Body() dados:UsuarioDto){
        this.us.CadastrarUsuario(dados)
    }
}
