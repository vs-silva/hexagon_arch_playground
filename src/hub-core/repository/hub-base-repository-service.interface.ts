export interface HubBaseRepositoryService<
  Entity,
  FilterDTO,
  CreateDTO,
  UpdateDTO,
> {
  findAll(limit?: number, offset?: number): Promise<Entity[]>;
  findBy(
    filterDto: FilterDTO,
    limit?: number,
    offset?: number,
  ): Promise<Entity[]>;
  findById(id): Promise<Entity>;
  create(createDto: CreateDTO): Promise<Entity>;
  update(id, updateDto: UpdateDTO): Promise<Entity>;
  remove(id): Promise<Entity>;
}
