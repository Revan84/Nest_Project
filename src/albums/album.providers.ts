import { Connection } from 'mongoose';
import {AlbumSchema} from './entities/album.entity';

export const albumsProviders = [
    {
        provide: 'ALBUM_MODEL',
        useFactory: (connection: Connection) => connection.model('Album', AlbumSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
