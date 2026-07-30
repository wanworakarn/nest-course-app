import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
@Module({
imports: [
JwtModule.register({
secret: process.env.JWT_SECRET_KEY,
signOptions: { expiresIn: '1d' }
}),
PassportModule,
],

controllers: [AuthController],
providers: [PrismaService, AuthService, JwtStrategy]
})
export class AuthModule {}