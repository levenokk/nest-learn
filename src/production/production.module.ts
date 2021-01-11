import { Module } from '@nestjs/common';
import { ProductionController } from './production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductionService } from './production.service';

@Module({
  controllers: [ProductionController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductionService],
})
export class ProductionModule {}
