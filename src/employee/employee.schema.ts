import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema()
export class Merchant {
    @Prop()
    name: string;
    @Prop({ unique: true })
    email: string;
    @Prop({ unique: true })
    password: string;
    @Prop({ default: false })
    isDeleted?: boolean

}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);