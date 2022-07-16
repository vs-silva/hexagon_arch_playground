import { HubBaseEntity } from '../../../../hub-core/entities/hub-base-entity.interface';

export interface Product extends HubBaseEntity {
  title: string;
  description: string;
}
