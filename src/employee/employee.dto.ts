import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MerchantDto {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String)
    password?: string;
}

