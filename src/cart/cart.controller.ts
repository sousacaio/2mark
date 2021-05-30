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
    return this.cartService.create(createCartDto);
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    return this.cartService.remove(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: number, @Body() body: any): Promise<any> {
    return await this.cartService.updateQuantity(id, body.quantity);
  }
}
