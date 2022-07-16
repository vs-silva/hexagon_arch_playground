import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './dtos/product.entity';
import { ProductSqlRepositoryService } from './repository/product-sql-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [],
  providers: [ProductSqlRepositoryService],
})
export class ProductModule {}
