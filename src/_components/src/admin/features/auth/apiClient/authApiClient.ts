import { inject } from 'regexparam';

import type { LoginRequestBody } from '@wsh-2024/schema/src/api/auth/LoginRequestBody';
import type { LoginResponse } from '@wsh-2024/schema/src/api/auth/LoginResponse';
import type { LogoutResponse } from '@wsh-2024/schema/src/api/auth/LogoutResponse';
import type { UserResponse } from '@wsh-2024/schema/src/api/auth/UserResponse';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type AuthApiClient = DomainSpecificApiClientInterface<{
  fetchAuthUser: [void, UserResponse];
  login: [{ body: LoginRequestBody }, LoginResponse];
  logout: [void, LogoutResponse];
}>;

export const authApiClient: AuthApiClient = {
  fetchAuthUser: async () => {
    const response = await apiClient.get<UserResponse>(inject('api/v1/admin/me', {}));
    return response.data;
  },
  fetchAuthUser$$key: () => [
    {
      method: 'get',
      requestUrl: `/api/v1/admin/logout`,
    },
  ],
  login: async ({ body }) => {
    const response = await apiClient
      .post<LoginResponse>(inject('api/v1/admin/login', {}), body);
    return response.data;
  },
  login$$key: (options) => [
    {
      method: 'post',
      requestUrl: `/api/v1/admin/login`,
    },
    options,
  ],
  logout: async () => {
    const response = await apiClient.post<LogoutResponse>(inject('api/v1/admin/logout', {}), {});
    return response.data;
  },
  logout$$key: () => [
    {
      method: 'post',
      requestUrl: `/api/v1/admin/logout`,
    },
  ],
};
