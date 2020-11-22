import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({
  versionKey: false,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  author: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
