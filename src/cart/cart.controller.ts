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

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cartService.remove(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: number, @Body() body: any): Promise<any> {
    return await this.cartService.updateQuantity(id, body.quantity);
  }
}
