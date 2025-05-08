import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => UserType)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Mutation(() => UserType)
	createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
		return this.userService.create(createUserInput);
	}

	@Query(() => [UserType], { name: 'users' })
	findAll() {
		return this.userService.findAll();
	}

	@Query(() => UserType, { name: 'user' })
	findOne(@Args('id') id: string) {
		return this.userService.findOne(id);
	}
}
