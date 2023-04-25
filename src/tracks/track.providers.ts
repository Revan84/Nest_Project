import { Connection } from 'mongoose';
import { TrackSchema } from './entities/track.entity';

export const tracksProviders = [
    {
        provide: 'TRACK_MODEL',
        useFactory: (connection: Connection) => connection.model('Track', TrackSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];