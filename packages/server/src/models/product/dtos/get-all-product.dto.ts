import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from 'src/models/pagination/pagination.dto'

export enum EnumProductSort {
  HIGH_PRICE,
  LOWE_PRICE,
  NEWEST,
  OLDEST,
}

export class GetAllProductDto extends PaginationDto {
  @IsOptional()
  @IsEnum(EnumProductSort)
  public readonly sort?: EnumProductSort

  @IsOptional()
  @IsString()
  public readonly searchTerm?: string
}