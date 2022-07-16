import { HubBaseApiController } from '../../../hub-core/api/hub-base-api-controller.interface';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { ProductSqlRepositoryService } from '../repository/product-sql-repository.service';

export class ProductsController
  implements HubBaseApiController<CreateProductDTO, UpdateProductDTO>
{
  constructor(
    private readonly productSqlRepository: ProductSqlRepositoryService,
  ) {}

  create(createDTO: CreateProductDTO) {
    console.log(createDTO);
    return this.productSqlRepository.create(createDTO);
  }

  findAll(queryParams) {}

  findById(id) {}

  remove(id) {}

  update(updateDTO: UpdateProductDTO) {}
}
