import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MerchantModel {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}