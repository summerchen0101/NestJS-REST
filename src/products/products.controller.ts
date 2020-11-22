import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.modal';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly prodcutService: ProductService) {}
  @Get()
  findAll() {
    return this.responseGenerator(this.prodcutService.findAll());
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseGenerator(this.prodcutService.findOne(id));
  }
  @Post()
  create(@Body() newProdcut: Omit<Product, 'id'>) {
    const product = {
      id: new Date().valueOf().toString(),
      ...newProdcut,
    };
    return this.responseGenerator(this.prodcutService.create(product));
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProduct: Product) {
    return this.responseGenerator(
      this.prodcutService.update({ ...updateProduct, id }),
    );
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.prodcutService.delete(id);
    return this.responseGenerator();
  }

  private responseGenerator(returnData?: any) {
    return { code: 0, data: returnData };
  }
}
