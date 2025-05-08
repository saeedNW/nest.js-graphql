import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
	@Field(() => ID, { description: 'User Object ID' })
	_id: string;

	@Field(() => String, { description: 'User username' })
	username: string;

	@Field(() => String, { description: 'User first name' })
	firstName: string;

	@Field(() => String, { description: 'User last name' })
	lastName: string;

	@Field(() => String, { description: 'User phone number' })
	phoneNumber: string;

	@Field(() => String, { description: 'User email' })
	email: string;
}
