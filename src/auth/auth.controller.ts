import { Controller, Post, Get, Body, Request, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../generated/prisma/client';
import { CreateUserDto } from '../generated/nestjs-dto/user/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(201)
  async create(@Body() userData: CreateUserDto): Promise<User | any> {
    await this.authService.signUp(userData);
    return { message: 'registration success' };
  }

  @Post('signin')
  @HttpCode(200)
  async login(@Body() signInData: SignInDto) {
    return await this.authService.signIn(signInData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req: any) {
    return await this.authService.getProfile(req.user.username);
  }
}
