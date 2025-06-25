import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usuarioService.SelecionarUsuario(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}