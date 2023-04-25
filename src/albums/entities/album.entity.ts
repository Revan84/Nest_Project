import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Track } from '../../tracks/entities/track.entity';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
    @ApiProperty({
        example: '60d25e779a794c20200e6b7d',
        description: 'The unique identifier of the album',
    })
    @Prop({ type: Types.ObjectId })
    id: Types.ObjectId;

    @ApiProperty({
        example: 'Last Journey',
        description: 'The name of the album',
    })
    @Prop()
    title: string;

    @ApiProperty({
        example: 2426,
        description: 'The total time of all tracks of the album',
    })
    @Prop()
    time: number;

    @ApiProperty({
        example: '2023-04-24T15:30:00Z',
        description: 'The creation date of the album',
        type: 'string',
        format: 'date-time',
    })
    @Prop()
    createdAt: Date;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
