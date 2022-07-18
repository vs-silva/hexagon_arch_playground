export interface HubBaseApiController<CreateDTO, UpdateDTO> {
  findAll(paginationQuery);
  findById(id);
  create(createDTO: CreateDTO);
  update(id, updateDTO: UpdateDTO);
  remove(id);
}
