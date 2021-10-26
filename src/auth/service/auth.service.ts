import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }
    throw new UnauthorizedException();
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    user.access_token = this.jwtService.sign(payload);
    const {...rest} = user
    return rest;
  }

  async createUser(email: string, pass: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = pass;

    return this.userRepository.save(user);
  }

  async signUp(email: string, pass: string) {
    const currentUser = await this.usersService.findByEmail(email);

    if (currentUser) throw new BadRequestException();
    const user = await this.createUser(email, pass);

    return user;
  }
}
