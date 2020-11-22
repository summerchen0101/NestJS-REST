import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './products.service';
@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly prodcutService: ProductService) {}
  @Get()
  async findAll() {
    return this.responseGenerator(await this.prodcutService.findAll());
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.responseGenerator(await this.prodcutService.findById(id));
  }
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  async create(@Body() newProdcut: CreateProductDto) {
    return this.responseGenerator(await this.prodcutService.create(newProdcut));
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    return this.responseGenerator(
      await this.prodcutService.update(id, updateProduct),
    );
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.prodcutService.delete(id);
    return this.responseGenerator(id);
  }

  private responseGenerator<T>(returnData?: T) {
    return { code: 0, data: returnData };
  }
}
