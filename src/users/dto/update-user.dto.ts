import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsNotEmpty()
  readonly password: string;
}
