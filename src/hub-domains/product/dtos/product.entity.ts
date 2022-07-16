import { HubBaseSqlDBEntity } from '../../../hub-core/db-entities/hub-base-sql-db.entity';
import { Product } from '../domain/entities/product.interface';
import { Column, Entity } from 'typeorm';

@Entity('products')
export class ProductEntity extends HubBaseSqlDBEntity implements Product {
  @Column()
  title: string;

  @Column()
  description: string;
}
