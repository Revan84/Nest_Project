import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTrackDto } from '../../tracks/dto/create-track.dto';

export class CreateAlbumDto {
    @ApiProperty({
        example: 'Last Journey',
        description: 'The name of the album',
    })
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({
        type: [CreateTrackDto],
    })
    @ValidateNested({ each: true })
    @Type(() => CreateTrackDto)
    readonly tracks: CreateTrackDto[];

    @ApiProperty({
        example: '2023-04-24T15:30:00Z',
        description: 'The creation date of the album',
        type: 'string',
        format: 'date-time',
    })
    @IsDateString()
    readonly createdAt: Date;
}