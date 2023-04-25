import {Module} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {TracksModule} from './tracks/tracks.module';
import {AlbumsModule} from './albums/albums.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URI'),
                useNewUrlParser: true,
                useUnifiedTopology: true,
                user: configService.get<string>('DB_USER'),
                pass: configService.get<string>('DB_PASSWORD'),
            }),
            inject: [ConfigService],
        }),
        TracksModule,
        AlbumsModule,
        AuthModule,
        UsersModule
    ],
})
export class AppModule {
}
