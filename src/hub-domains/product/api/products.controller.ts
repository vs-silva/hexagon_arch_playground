import { HubBaseApiController } from '../../../hub-core/api/hub-base-api-controller.interface';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { ProductSqlRepositoryService } from '../repository/product-sql-repository.service';
import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Query,
  Param,
  ParseUUIDPipe, Delete,
} from '@nestjs/common';
import { HubBasePaginationDTO } from '../../../hub-core/dtos/hub-base-pagination.dto';

@Controller('products')
export class ProductsController
  implements HubBaseApiController<CreateProductDTO, UpdateProductDTO>
{
  constructor(
    private readonly productSqlRepository: ProductSqlRepositoryService,
  ) {}

  @Get()
  findAll(@Query() paginationQuery: HubBasePaginationDTO) {
    const { limit, offset } = paginationQuery;
    return this.productSqlRepository.findAll(limit, offset);
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productSqlRepository.findById(id);
  }

  @Post()
  create(@Body() createDTO: CreateProductDTO) {
    return this.productSqlRepository.create(createDTO);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDTO: UpdateProductDTO) {
    return this.productSqlRepository.update(id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productSqlRepository.remove(id);
  }
}
