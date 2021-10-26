import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class UserAuthDTO {
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty({example: 'example@gmail.com', description: 'Email'})
  email: string;

  @IsNotEmpty()
  @ApiProperty({ minLength: 8, example: 'min_8_symbols', description: 'Password'})
  password: string;
}
