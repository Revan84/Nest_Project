import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Album } from '../../albums/entities/album.entity';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @ApiProperty({
    example: '60d25e779a794c20400e6b7d',
    description: 'The unique identifier of the track',
  })
  @Prop({ type: Types.ObjectId })
  id: Types.ObjectId;

  @ApiProperty({ example: 'Invasion', description: 'Name of the track' })
  @Prop()
  title: string;

  @ApiProperty({ example: 210, description: 'Time of the track' })
  @Prop()
  time: number;

  @ApiProperty({
    example: '60d25e779a794c20200e6b7d',
    description: 'The ID of the album that the track belongs to',
  })
  @Prop({ type: Types.ObjectId, ref: 'Album' })
  album: Album;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
