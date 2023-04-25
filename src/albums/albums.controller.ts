import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './entities/album.entity';

@ApiBearerAuth()
@ApiTags('albums')
@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {}

    @Post()
    @ApiOperation({ summary: 'Create album' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
        return this.albumsService.create(createAlbumDto);
    }

    @Get()
    findAll(): Promise<Album[]> {
        return this.albumsService.findAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Album,
    })
    findOne(@Param('id') id: string): Promise<Album> {
        return this.albumsService.findOne(id);
    }
}
