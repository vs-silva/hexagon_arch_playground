import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDbEntity } from './dtos/product-db.entity';
import { ProductSqlRepositoryService } from './repository/product-sql-repository.service';
import { ProductsController } from './api/products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDbEntity])],
  controllers: [ProductsController],
  providers: [ProductSqlRepositoryService],
})
export class ProductModule {}
