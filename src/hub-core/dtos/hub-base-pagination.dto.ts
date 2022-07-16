import { IsOptional, IsPositive } from 'class-validator';

export abstract class HubBasePaginationDTO {
  @IsOptional()
  @IsPositive()
  limit?: number = 100; //TODO: add a config here

  @IsOptional()
  @IsPositive()
  offset?: number;
}
