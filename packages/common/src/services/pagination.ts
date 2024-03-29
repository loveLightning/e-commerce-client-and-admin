import { ApiMethods } from '../enums'
import { IPagination } from '../types'
import { BaseService } from './base'

export class PaginationService extends BaseService {
  public static async getProfile(data: IPagination, defaultPerPage: number) {
    return await this.fetch({
      method: 'GET',
      url: `${ApiMethods.Pagination}`,
      data: {
        data,
        defaultPerPage,
      },
    })
  }
}
