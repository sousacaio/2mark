import { IsInt, IsNotEmpty } from 'class-validator';
export class CreateCartDto {
  @IsInt()
  @IsNotEmpty()
  user: any;

  @IsInt()
  @IsNotEmpty()
  product: any;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
