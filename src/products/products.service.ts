import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.modal';
@Injectable()
export class ProductService {
  private products: Product[] = [];
  create(newProduct: Product) {
    this.products.push(newProduct);
    return newProduct;
  }
  update({ id, name, author }: Product) {
    const { product } = this.findProdcutIndex(id);
    if (name) {
      product.name = name;
    }
    if (author) {
      product.author = author;
    }
    return product;
  }
  delete(id: string) {
    const { index } = this.findProdcutIndex(id);
    this.products.splice(index, 1);
  }
  findAll() {
    return [...this.products];
  }
  findOne(id: string) {
    const { product } = this.findProdcutIndex(id);
    return { ...product };
  }
  private findProdcutIndex(id: string) {
    const i = this.products.findIndex((t) => t.id === id);
    if (i === -1) {
      throw new NotFoundException('Could not find product.');
    }
    return { index: i, product: this.products[i] };
  }
}
