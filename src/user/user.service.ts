import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

	async create(createUserInput: CreateUserInput) {
		return await this.userModel.create(createUserInput);
	}

	async findAll(): Promise<UserDocument[]> {
		return await this.userModel.find({});
	}

	async findOne(id: string) {
		return await this.userModel.findById(id);
	}
}
