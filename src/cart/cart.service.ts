import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = Cart.create(createCartDto);
    await cart.save();
    return cart;
  }

  async findAll(): Promise<Cart[]> {
    return await Cart.find({
      relations: ['user', 'product'],
    });
  }

  async findByUser(id: number): Promise<Cart[]> {
    return await Cart.find({ where: { user: id } });
  }

  async findByProduct(id: number): Promise<Cart[]> {
    return await Cart.find({ where: { product: id } });
  }

  async remove(id: number): Promise<any> {
    return await Cart.delete(id);
  }
}
