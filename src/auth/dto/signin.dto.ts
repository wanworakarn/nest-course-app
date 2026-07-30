import { IsOptional, IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'username must be provided' })
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  @IsEmail({}, { message: 'email is malformed' })
  email: string;

  @IsNotEmpty({ message: 'password must be provided' })
  @IsString()
  password: string;
}
