import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { productDocument, Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductionService {
  constructor(
    @InjectModel(Product.name) private product: Model<productDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.product.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.product.findById(id);
  }

  async create(body: CreateProductDto): Promise<Product> {
    const product = new this.product(body);

    return product.save();
  }

  async update(id: string, body: UpdateProductDto): Promise<Product> {
    return this.product.findByIdAndUpdate(id, body, { new: true });
  }
}
