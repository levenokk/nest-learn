import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductionService } from './production.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('production')
export class ProductionController {
  constructor(private product: ProductionService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.product.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.product.getById(id);
  }

  @Post()
  create(@Body() body: CreateProductDto): Promise<Product> {
    return this.product.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateProductDto,
  ): Promise<Product> {
    return this.product.update(id, body);
  }
}
