import { ApiProperty } from '@nestjs/swagger';

export class CreateTrackDto {
  @ApiProperty({ example: 'Track 1', description: 'Name of the track' })
  readonly title: string;

  @ApiProperty({ example: 150, description: 'Time of the track' })
  readonly time: number;

  @ApiProperty({
    example: '60d25e779a794c20200e6b7d',
    description: 'The ID of the album that the track belongs to',
  })
  readonly album: string;

  @ApiProperty({
    example: '60d25e779a794c20200e6b7d',
    description: 'The unique identifier of the track',
  })
  readonly id: string;
}
