import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ){}

    create(user: User): Promise<User> {
        return this.usersRepository.save(user);
      }
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
    findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({id});
      }

    async findByEmail(email: string): Promise<User>{
        const user = await this.usersRepository.findOne({email: email});
        return this.findByEmail(email);
      }
    
    update(id: number, user: User): Promise<any> {
        return this.usersRepository.update(id, user);
      }
    
    delete(id: number): Promise<any> {
        return this.usersRepository.delete(id);
      }
    }
    