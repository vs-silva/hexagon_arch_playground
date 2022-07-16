import { HubBaseSqlRepositoryService } from '../../../hub-core/repository/hub-base-sql-repository.service';
import { ProductDbEntity } from '../dtos/product-db.entity';
import { FilterProductDTO } from '../dtos/fitler-product.dto';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductSqlRepositoryService extends HubBaseSqlRepositoryService<
  ProductDbEntity,
  FilterProductDTO,
  CreateProductDTO,
  UpdateProductDTO
> {
  constructor(
    @InjectRepository(ProductDbEntity)
    protected readonly repository: Repository<ProductDbEntity>,
  ) {
    super();
  }
}
