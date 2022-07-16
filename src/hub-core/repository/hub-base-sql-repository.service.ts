import { HubBaseRepositoryService } from './hub-base-repository-service.interface';
import { HubBaseSqlDBEntity } from '../db-entities/hub-base-sql-db.entity';
import { DeepPartial, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export abstract class HubBaseSqlRepositoryService<
  Entity extends HubBaseSqlDBEntity,
  FilterDTO,
  CreateDTO extends DeepPartial<Entity>,
  UpdateDTO extends DeepPartial<Entity>,
> implements HubBaseRepositoryService<Entity, FilterDTO, CreateDTO, UpdateDTO>
{
  protected readonly repository: Repository<Entity>;

  async findAll(limit?: number, offset?: number): Promise<Entity[]> {
    const result = await this.repository.find({
      take: limit,
      skip: offset,
    });

    if (!result) {
      throw new NotFoundException('No results found');
    }

    return result;
  }

  async findBy(
    filterDto: FilterDTO,
    limit?: number,
    offset?: number,
  ): Promise<Entity[]> {
    const result = await this.repository.find({
      where: filterDto,
      take: limit,
      skip: offset,
    });

    if (!result) {
      throw new NotFoundException('No results found');
    }

    return result;
  }

  async findById(id): Promise<Entity> {
    const result = await this.repository.findOne({
      where: { id: id },
    });

    if (!result) {
      throw new NotFoundException(`Entity with ID: ${id} not found!`);
    }

    return result;
  }

  create(createDto: CreateDTO): Promise<Entity> {
    const result = this.repository.create(createDto);
    return this.repository.save(result);
  }

  async update(id, updateDto: UpdateDTO): Promise<Entity> {
    const result = await this.repository.preload({
      id: id,
      ...updateDto,
    });

    if (!result) {
      throw new NotFoundException(`Entity with ID: ${id} not found!`);
    }

    return this.repository.save(result);
  }

  async remove(id): Promise<Entity> {
    const result = await this.findById(id);
    return this.repository.remove(result);
  }
}
