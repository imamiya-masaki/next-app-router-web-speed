import { inject } from 'regexparam';

import type { DeleteBookRequestParams } from '@wsh-2024/schema/src/api/books/DeleteBookRequestParams';
import type { DeleteBookResponse } from '@wsh-2024/schema/src/api/books/DeleteBookResponse';
import type { GetBookListRequestQuery } from '@wsh-2024/schema/src/api/books/GetBookListRequestQuery';
import type { GetBookListResponse } from '@wsh-2024/schema/src/api/books/GetBookListResponse';
import type { GetBookRequestParams } from '@wsh-2024/schema/src/api/books/GetBookRequestParams';
import type { GetBookResponse } from '@wsh-2024/schema/src/api/books/GetBookResponse';
import type { PatchBookRequestBody } from '@wsh-2024/schema/src/api/books/PatchBookRequestBody';
import type { PatchBookRequestParams } from '@wsh-2024/schema/src/api/books/PatchBookRequestParams';
import type { PatchBookResponse } from '@wsh-2024/schema/src/api/books/PatchBookResponse';
import type { PostBookRequestBody } from '@wsh-2024/schema/src/api/books/PostBookRequestBody';
import type { PostBookResponse } from '@wsh-2024/schema/src/api/books/PostBookResponse';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type BookApiClient = DomainSpecificApiClientInterface<{
  delete: [{ params: DeleteBookRequestParams }, DeleteBookResponse];
  fetch: [{ params: GetBookRequestParams }, GetBookResponse];
  fetchList: [{ query: GetBookListRequestQuery }, GetBookListResponse];
  post: [{ body: PostBookRequestBody }, PostBookResponse];
  update: [{ body: PatchBookRequestBody; params: PatchBookRequestParams }, PatchBookResponse];
}>;

export const bookApiClient: BookApiClient = {
  delete: async ({ params }) => {
    const response = await apiClient.delete<DeleteBookResponse>(inject('api/v1/books/:bookId', params));
    return response.data;
  },
  delete$$key: (options) => [
    {
      method: 'delete',
      requestUrl: '/api/v1/books/:bookId',
    },
    options,
  ],
  fetch: async ({ params }) => {
    const response = await apiClient.get<GetBookResponse>(inject('api/v1/books/:bookId', params));
    return response.data;
  },
  fetch$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/books/:bookId',
    },
    options,
  ],
  fetchList: async ({ query }) => {
    const response = await apiClient
      .get<GetBookListResponse>(inject('api/v1/books', {}), { searchParams: query })
    return response.data;
  },
  fetchList$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/books',
    },
    options,
  ],
  post: async ({ body }) => {
    const response = await apiClient.post<PostBookResponse>(inject('api/v1/books', {}), body );
    return response.data;
  },
  post$$key: (options) => [
    {
      method: 'post',
      requestUrl: '/api/v1/books',
    },
    options,
  ],
  update: async ({ body, params }) => {
    const response = await apiClient
      .patch<PatchBookResponse>(inject('api/v1/books/:bookId', params), { json: body })
    return response.data;
  },
  update$$key: (options) => [
    {
      method: 'patch',
      requestUrl: '/api/v1/books/:bookId',
    },
    options,
  ],
};
