import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({
    required: true,
    min: 1,
  })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
