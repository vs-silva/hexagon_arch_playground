import { Product } from '../domain/entities/product.interface';
import { IsString, IsUUID } from 'class-validator';

export class ProductDTO implements Product {
  @IsUUID(4, { each: true })
  readonly id: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
}
