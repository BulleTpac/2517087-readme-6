import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISO8601, IsString } from 'class-validator';

import { AuthenticationValidateMessage } from '../authentication-module/authentication.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1990-02-22',
  })
  @IsISO8601({}, { message: AuthenticationValidateMessage.DateBirthNotValid })
  public dateBirth: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Alex',
  })
  @IsString()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  @IsString()
  public lastname: string;

  @ApiProperty({
    description: 'User Password',
    example: 'Querty123'
  })
  @IsString()
  public password: string;
}
