import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track } from './entities/track.entity';

@ApiBearerAuth()
@ApiTags('tracks')
@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  @ApiOperation({ summary: 'Create track' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createTrackDto: CreateTrackDto): Promise<Track> {
    return this.tracksService.create(createTrackDto);
  }

  @Get()
  findAll(): Promise<Track[]> {
    return this.tracksService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Track,
  })
  findOne(@Param('id') id: string): Promise<Track> {
    return this.tracksService.findOne(id); // Remove the + before id
  }
}
