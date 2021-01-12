import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  NotFoundException, UseFilters,
} from '@nestjs/common';
import { ProductionService } from './production.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InternalException } from '../errors/internal.exception';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Controller('production')
export class ProductionController {
  constructor(private product: ProductionService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  getAll(): Promise<Product[]> {
    throw new NotFoundException();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    try {
      return await this.product.getById(id);
    } catch (e: any) {
      throw new NotFoundException();
    }
  }

  @Post()
  async create(@Body() body: CreateProductDto): Promise<Product> {
    try {
      return await this.product.create(body);
    } catch (e: any) {
      throw new InternalException();
    }
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateProductDto,
  ): Promise<Product> {
    return this.product.update(id, body);
  }
}
