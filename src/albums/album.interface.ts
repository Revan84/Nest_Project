import { Document } from 'mongoose';

export interface Album extends Document {
    readonly id: string;
    readonly title: string;
    readonly time: number;
    readonly createdAt: Date;
}