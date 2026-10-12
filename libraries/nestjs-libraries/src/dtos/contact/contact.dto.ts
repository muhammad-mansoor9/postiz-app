import {
  IsDefined,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ContactDto {
  @IsString()
  @IsDefined()
  @MinLength(2)
  @MaxLength(80)
  name: string;

  @IsString()
  @IsDefined()
  @IsEmail()
  email: string;

  @IsString()
  @IsDefined()
  @MinLength(3)
  @MaxLength(150)
  subject: string;

  @IsString()
  @IsDefined()
  @MinLength(10)
  @MaxLength(5000)
  message: string;

  @IsOptional()
  @IsString()
  recaptchaToken?: string;
}
