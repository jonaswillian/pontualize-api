import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async validarUsuario(x: string, y: string): Promise<any> {
    const usuario = await this.usuarioService.logarUsuario(x);
    if (usuario && usuario.password === y) {
      const result = usuario
      //const { password, ...result } = usuario;
      return result;
    }
    return null;
  }
}