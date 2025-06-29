import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(u: string, p: string): Promise<any> {
    const usuarioLogado = await this.authService.validarUsuario(u, p);
    if (!usuarioLogado) {
      throw new UnauthorizedException();
    }
    return usuarioLogado;
  }
}