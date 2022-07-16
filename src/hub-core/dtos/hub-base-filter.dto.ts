import { IsObject } from 'class-validator';

export abstract class HubBaseFilterDTO {
  @IsObject()
  readonly filter?: object;
}
