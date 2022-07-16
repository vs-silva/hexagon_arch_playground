export interface HubBaseApiController<CreateDTO, UpdateDTO> {
  findAll(queryParams);
  findById(id);
  create(createDTO: CreateDTO);
  update(updateDTO: UpdateDTO);
  remove(id);
}
