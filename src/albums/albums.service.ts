import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateAlbumDto} from './dto/create-album.dto';
import {Album, AlbumDocument} from './entities/album.entity';
import {Track, TrackDocument} from '../tracks/entities/track.entity';

@Injectable()
export class AlbumsService {
    constructor(
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    ) {
    }

    async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
        const totalTime = createAlbumDto.tracks.reduce((acc, track) => acc + track.time, 0);

        const album = new this.albumModel({
            title: createAlbumDto.title,
            time: totalTime,
        });

        const savedAlbum = await album.save();

        for (const track of createAlbumDto.tracks) {
            const newTrack = new this.trackModel({
                title: track.title,
                time: track.time,
                album: savedAlbum.id,
            });

            await newTrack.save();
        }

        return savedAlbum;
    }

    async findOne(id: string): Promise<Album> {
        return this.albumModel.findById(id).exec();
    }

    async findAll(): Promise<Album[]> {
        return this.albumModel.find().exec();
    }
}