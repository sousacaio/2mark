import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = Product.create(createProductDto);
    await product.save();
    return product;
  }
  async findAll(): Promise<Product[]> {
    const res = await Product.find({
      relations: ['user'],
    });

    res.forEach((users) => {
      delete users.user.password;
    });

    return res;
  }

  async findOne(id: number): Promise<Product> {
    return await Product.findOne(id);
  }
}
