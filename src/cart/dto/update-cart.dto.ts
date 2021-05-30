import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsInt()
  @IsOptional()
  id: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
