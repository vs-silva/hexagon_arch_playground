import { HubBaseEntity } from '../entities/hub-base-entity.interface';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class HubBaseSqlDBEntity implements HubBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
