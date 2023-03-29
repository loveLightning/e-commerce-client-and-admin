export enum EnumProductSort {
  HIGH_PRICE,
  LOWE_PRICE,
  NEWEST,
  OLDEST,
}

export interface IProductSort {
  searchTerm?: EnumProductSort
  sort?: string
  page?: number
  perPage?: number
}

export interface IProduct {
  id: number
  name: string
  slug: string
  description: string
  price: number
  images: string[]
  categoryId: number
  userId: number
}

export type UpdateProductTypes = Omit<IProduct, 'id' | 'userId' | 'slug'>
