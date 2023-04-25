import { Test } from '@nestjs/testing';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { Track } from './entities/track.entity';
import { Album } from '../albums/entities/album.entity';
import {Types} from "mongoose";

describe('TracksController', () => {
  let tracksController: TracksController;
  let tracksService: TracksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [TracksController],
        providers: [TracksService],
      }).compile();

    tracksService = moduleRef.get<TracksService>(TracksService);
    tracksController = moduleRef.get<TracksController>(TracksController);
  });

  describe('findOne', () => {
    it('should return a track', async () => {
      const testAlbum: Album = {
        id: new Types.ObjectId(),
        title: 'Album Test',
        time: 500,
        tracks: [],
        createdAt: new Date(),
      };

      const result: Track = {
        id: new Types.ObjectId(),
        title: 'Title Test',
        time: 260,
        album: testAlbum.id,
      };

      jest.spyOn(tracksService, 'findOne').mockImplementation(() => Promise.resolve(result));

      expect(await tracksController.findAll()).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of tracks', async () => {
      const testAlbum: Album = {
        id: new Types.ObjectId(),
        title: 'Album Test',
        time: 500,
        tracks: [],
        createdAt: new Date(),
      };

      const result = [{
        id: new Types.ObjectId(),
        title: 'Title 2 Test',
        time: 120,
        album: testAlbum.id,
      }];

      jest.spyOn(tracksService, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await tracksController.findAll()).toBe(result);
    });
  });

});


