import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { Product, ProductDocument } from './schemas/product.schema';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdCat = new this.productModel(createProductDto);
    return createdCat.save();
  }
  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }
  async delete(id: string) {
    return this.productModel.findByIdAndRemove(id);
  }

  async findById(id: string) {
    return this.productModel.findById(id);
  }
}
