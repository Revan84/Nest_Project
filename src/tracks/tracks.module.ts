import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './entities/track.entity';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Album, AlbumSchema } from '../albums/entities/album.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Track.name, schema: TrackSchema },
            { name: Album.name, schema: AlbumSchema } // Add the AlbumModel here
        ])
    ],
    providers: [TracksService],
    controllers: [TracksController],
    exports: [TracksService]
})
export class TracksModule {}