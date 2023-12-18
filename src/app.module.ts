import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb+srv://elamuruganraju4545:elamurugan4545@cluster0.mk7gad1.mongodb.net/merchant'),
    EmployeeModule,

  ],
  controllers: [AppController],

  providers: [AppService, AppResolver]
})
export class AppModule { }