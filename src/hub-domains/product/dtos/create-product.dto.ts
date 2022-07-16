import { CreateUpdateProductDTO } from '../domain/dtos/create-update-product-dto.interface';
import { IsString } from 'class-validator';

export class CreateProductDTO implements CreateUpdateProductDTO {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
}
