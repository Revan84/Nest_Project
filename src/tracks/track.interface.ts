import { Document, Types } from 'mongoose';

export interface Track extends Document {
    readonly title: string;
    readonly time: number;
    readonly album: Types.ObjectId;
}
