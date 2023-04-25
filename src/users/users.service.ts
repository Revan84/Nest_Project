import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, UserDocument} from './entities/user.entity';
import {hash} from 'bcrypt';
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) {
    }

    async findOne(id: string): Promise<UserDocument> {
        const user = await this.userModel.findOne({id}).exec();
        if (!user) {
            throw new NotFoundException(`User with id : ${id} not found`);
        }
        return user;
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email}).exec();
    }

    async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userModel.findOne({email: createUserDto.email}).exec();

        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        const hashedPassword = await hash(createUserDto.password, 10);
        const createdUser = new this.userModel({...createUserDto, password: hashedPassword});
        return createdUser.save();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.findOne(id);
        user.username = updateUserDto.username || user.username;
        user.email = updateUserDto.email || user.email;
        user.password = updateUserDto.password ? await hash(updateUserDto.password, 10) : user.password;
        const updatedUser = await user.save();
        return updatedUser.toObject({virtuals: true});
    }


    async remove(id: string): Promise<User> {
        const user = await this.findOne(id);
        await this.userModel.deleteOne({id: id}).exec();
        return user;
    }
}
