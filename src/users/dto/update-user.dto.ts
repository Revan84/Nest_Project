import {ApiPropertyOptional} from '@nestjs/swagger';
import {IsEmail, IsOptional} from 'class-validator';

export class UpdateUserDto {

    @ApiPropertyOptional()
    @IsOptional()
    readonly username?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    readonly email?: string;

    @ApiPropertyOptional()
    @IsOptional()
    readonly password?: string;
}
