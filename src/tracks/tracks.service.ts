import {Injectable, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateTrackDto} from './dto/create-track.dto';
import {Track, TrackDocument} from './entities/track.entity';
import {Album, AlbumDocument} from "../albums/entities/album.entity";

@Injectable()
export class TracksService {
    constructor(
        @InjectModel(Track.name)
        private trackModel: Model<TrackDocument>,
        @InjectModel(Album.name)
        private albumModel: Model<AlbumDocument>,
    ) {}

    async create(createTrackDto: CreateTrackDto): Promise<Track> {
        const { title, time, album } = createTrackDto;
        const createdTrack = new this.trackModel({ title, time, album: album });
        const albumDoc = await this.albumModel.findOne({ id: createTrackDto.album }).exec();
        if (!albumDoc) {
            throw new NotFoundException(`Album with ID ${createTrackDto.album} not found`);
        }
        createdTrack.album = albumDoc.id;
        await createdTrack.save();
        await albumDoc.save();
        return createdTrack;
    }


    async findOne(id: string): Promise<Track> {
        return this.trackModel.findById(id).exec();
    }

    async findAll(): Promise<Track[]> {
        return this.trackModel.find().exec();
    }
}
