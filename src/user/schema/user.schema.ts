import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
	timestamps: true,
	id: false,
})
export class User extends Document {
	@Prop({
		required: true,
	})
	username: string;

	@Prop({
		required: true,
	})
	firstName: string;

	@Prop({
		required: true,
	})
	lastName: string;

	@Prop({
		required: true,
	})
	phoneNumber: string;

	@Prop({
		required: true,
	})
	email: string;

	@Prop({
		required: true,
	})
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
