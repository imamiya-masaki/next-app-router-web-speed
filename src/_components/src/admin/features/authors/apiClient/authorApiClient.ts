import { inject } from 'regexparam';

import type { DeleteAuthorRequestParams } from '@wsh-2024/schema/src/api/authors/DeleteAuthorRequestParams';
import type { DeleteAuthorResponse } from '@wsh-2024/schema/src/api/authors/DeleteAuthorResponse';
import type { GetAuthorListRequestQuery } from '@wsh-2024/schema/src/api/authors/GetAuthorListRequestQuery';
import type { GetAuthorListResponse } from '@wsh-2024/schema/src/api/authors/GetAuthorListResponse';
import type { GetAuthorRequestParams } from '@wsh-2024/schema/src/api/authors/GetAuthorRequestParams';
import type { GetAuthorResponse } from '@wsh-2024/schema/src/api/authors/GetAuthorResponse';
import type { PatchAuthorRequestBody } from '@wsh-2024/schema/src/api/authors/PatchAuthorRequestBody';
import type { PatchAuthorRequestParams } from '@wsh-2024/schema/src/api/authors/PatchAuthorRequestParams';
import type { PatchAuthorResponse } from '@wsh-2024/schema/src/api/authors/PatchAuthorResponse';
import type { PostAuthorRequestBody } from '@wsh-2024/schema/src/api/authors/PostAuthorRequestBody';
import type { PostAuthorResponse } from '@wsh-2024/schema/src/api/authors/PostAuthorResponse';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type AuthorApiClient = DomainSpecificApiClientInterface<{
  delete: [{ params: DeleteAuthorRequestParams }, DeleteAuthorResponse];
  fetch: [{ params: GetAuthorRequestParams }, GetAuthorResponse];
  fetchList: [{ query: GetAuthorListRequestQuery }, GetAuthorListResponse];
  post: [{ body: PostAuthorRequestBody }, PostAuthorResponse];
  update: [{ body: PatchAuthorRequestBody; params: PatchAuthorRequestParams }, PatchAuthorResponse];
}>;

export const authorApiClient: AuthorApiClient = {
  delete: async ({ params }) => {
    const response = await apiClient.delete<DeleteAuthorResponse>(inject('api/v1/authors/:authorId', params));
    return response.data;
  },
  delete$$key: (options) => [
    {
      method: 'delete',
      requestUrl: '/api/v1/authors/:authorId',
    },
    options,
  ],
  fetch: async ({ params }) => {
    const response = await apiClient.get<GetAuthorResponse>(inject('api/v1/authors/:authorId', params));
    return response.data;
  },
  fetch$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/authors/:authorId',
    },
    options,
  ],
  fetchList: async ({ query }) => {
    const response = await apiClient
      .get<GetAuthorListResponse>(inject('api/v1/authors', {}), { searchParams: query })
    return response.data;
  },
  fetchList$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/authors',
    },
    options,
  ],
  post: async ({ body }) => {
    const response = await apiClient.post<PostAuthorResponse>(inject('api/v1/authors', {}), body );
    return response.data;
  },
  post$$key: (options) => [
    {
      method: 'post',
      requestUrl: '/api/v1/authors',
    },
    options,
  ],
  update: async ({ body, params }) => {
    const response = await apiClient
      .patch<PatchAuthorResponse>(inject('api/v1/authors/:authorId', params), { json: body });
    return response.data;
  },
  update$$key: (options) => [
    {
      method: 'patch',
      requestUrl: '/api/v1/authors/:authorId',
    },
    options,
  ],
};
