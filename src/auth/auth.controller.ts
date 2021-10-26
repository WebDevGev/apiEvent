import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from './service/auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthDTO } from './dto/auth.dto';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiTags('SignIn')
  @ApiOperation({ summary: 'Get a user' })
  @ApiResponse({ status: 200 })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('sign-up')
  @ApiTags('SignUp')
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 200 })
  async signUp(@Body() data: UserAuthDTO, @Req() req: any) {
    const user = await this.authService.signUp(data.email, data.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
