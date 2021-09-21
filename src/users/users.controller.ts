import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')

@Controller('users')

export class UsersController {

    constructor(private readonly usersService: UsersService){}
    
  @ApiOperation({summary: 'Creating a user'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() user: User): Promise<CreateUserDto> {
    return this.usersService.create(user);
  }

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({summary: 'Get a user by id'})
  @ApiResponse({status: 200, type: User})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @ApiOperation({summary: 'Update a user by id'})
  @ApiResponse({status: 200, type: User})
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(Number(id), user);
  }

  @ApiOperation({summary: 'Delete a user by id'})
  @ApiResponse({status: 200})
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
    
}

    