import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    try {
      return this.cartService.create(createCartDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    try {
      return this.cartService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    try {
      return this.cartService.remove(id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: number, @Body() body: any): Promise<any> {
    try {
      return await this.cartService.updateQuantity(id, body.quantity);
    } catch (error) {
      return error;
    }
  }
}
