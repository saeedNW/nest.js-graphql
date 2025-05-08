import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		/** Register MongoDB connection */
		MongooseModule.forRoot('mongodb://localhost:27017/nestjs-graphql'),
	],
})
export class AppModule {}
