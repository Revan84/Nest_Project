import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './entities/album.entity';
import { Track, TrackSchema } from '../tracks/entities/track.entity';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TracksModule } from '../tracks/tracks.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Album.name, schema: AlbumSchema },
            { name: Track.name, schema: TrackSchema },
        ]),
        TracksModule,
    ],
    providers: [AlbumsService],
    controllers: [AlbumsController],
    exports: [AlbumsService],
})
export class AlbumsModule {}