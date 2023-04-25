import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {ApiBody, ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string', example: 'john@example.com' },
                password: { type: 'string', example: 'changeme' },
            },
            required: ['email', 'password'],
        },
    })
    logIn(@Body() signInDto: Record<string, any>) {
        return this.authService.logIn(signInDto.email, signInDto.password);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signUp(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }
}
